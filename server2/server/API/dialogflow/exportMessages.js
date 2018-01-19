import { subscribeToSlackChannel, SendMessage } from '../backend/connector'
import { Messages } from '/both/collections'

export function MessagesSendToSlack (message, conversationID) {
  // subscribeToSlackChannel(conversationID)
  // check if subscription is working
  let messageDB = Messages.findOne({_id: conversationID})
  if (!messageDB.subscription) {
    // console.log('start subscription')
    Messages.upsert({_id: conversationID}, {$set: { subscription: true }})
    // console.log('init subscription')
    subscribeToSlackChannel(conversationID)
  }
  if (message.text) {
    // send to Slack Backend
    // console.log('send to Slack')
    // console.log('send me text to Message')
    // console.log(message)
    SendMessage(message.text, conversationID, 'ME', message._id)
  } else if (message.result) {
    // console.log(message.result.fulfillment.speech)
    // send to slack Backend
    // console.log('messageBot')
    // console.log(message)
    // console.log(message.result.fulfillment.speech)
    setTimeout(() =>{
      SendMessage(message.result.fulfillment.speech, conversationID, 'BOT', message.id)
    },200)
  }
}
