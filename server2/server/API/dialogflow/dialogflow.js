import { SaveRaw, SaveMessages, UserDataParsed } from './userData'
import { Random } from 'meteor/random'
import fetch from 'node-fetch'
import { pubsub } from '/server/subscriptions'
import { MessagesSendToSlack } from './exportMessages'
const appToken = '5312761368e84005ad7342d7e54a49ac'
import { Messages } from '/both/collections'
const url = 'https://api.dialogflow.com/v1/query?v=20150910'

function myMessage (message) {
  // console.log(message)
  const payload = {
    _id: message.conversationID,
    messages: [{
      _id: message._id,
      text: message.text,
      author: message.author,
      me: message.me,
      conversationID: message.conversationID
    }]
  }
  SaveMessages(payload)
  MessagesSendToSlack(message, message.conversationID)
  pubsub.publish('messages', payload)
}

function botMessage (data, message) {
  let messageDB = Messages.findOne({_id: message.conversationID})
  if (messageDB.botActive === false) {
    console.log('turn off the Bot')
    return
  }
  console.log('data')
  // console.log(data)
  // console.log(message)
  const payload = {
    _id: message.conversationID,
    messages: [{
      _id: data.id,
      text: data.result.fulfillment.speech,
      author: 'Bitler',
      me: false,
      conversationID: message.conversationID
    }]
  }
  SaveMessages(payload)
  MessagesSendToSlack(data, message.conversationID)
  pubsub.publish('messages', payload)
}

function sendBOTMessage (message) {
  // console.log(message)
  const body = {
    'lang': 'nl',
    'query': message.text,
    'sessionId': message.conversationID
    // 'timezone': 'America/New_York'
  }
  // Check if bot needs to be active of inactive
  let messageDB = Messages.findOne({_id: message.conversationID})
  // if (messageDB.botActive) {
  //   return 'No more Bot'
  // }
  fetch(url, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${appToken}`
    },
    body: JSON.stringify(body)
  })
    .then((json) => {
      // console.log(json)
      return json.json()
    })
    .then(function (data) {
      // console.log(data)
      UserDataParsed(message.conversationID, data)
      botMessage(data, message)
    })
    .catch(function (error) {
      console.log('Request failed', error)
    })
}

export function ClientMessageAndResponse (message) {
  // return message to the Chat interface
  //
  // SaveRaw(message)
  myMessage(message)
  sendBOTMessage(message)
}
