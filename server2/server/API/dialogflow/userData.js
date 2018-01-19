import { Messages } from '/both/collections'

export function UserDataParsed (id, data) {
  if (data.result.contexts[0]) {
    const parsedData = data.result.contexts[0].parameters
    if (parsedData.any) {
      Messages.upsert({_id: id}, {$addToSet: {parsedMessageContent: {quest: parsedData.any}}})
    }
    // if(parsedData.quest) {console.log('quest')}
    if (parsedData.email) {
      Messages.upsert({_id: id}, {$addToSet: {parsedMessageContent: {email: parsedData.email}}})
    }
  }
}

export function SaveRaw (Message) {
  console.log(Message)
  Messages.upsert({_id: Message.conversationID}, { $push: {raw: Message.text} })
}

export function SaveMessages (payload) {
  // console.log('payload')
  // console.log(payload)
  if (payload.messages[0]) {
    Messages.upsert({_id: payload._id}, { $push: {raw: payload.messages[0]} })
  }
}
