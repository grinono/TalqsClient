// import { Messages } from '/both/collections'
//
// export function saveProvidedContext (message) {
//   const messageID = message.conversationID
//   // check if their is already a context
//   const msg = Messages.findOne({_id: messageID})
//   // console.log(msg)
//   for (message of msg.parsedMessageContent) {
//     if (message.entities === 'context') {
//       console.log('their is a record')
//       return (false)
//     }
//   }
//   Messages.upsert({_id: messageID}, { $push: {parsedMessageContent: {_text: message.text, entities: 'context'}} })
//   return true
// }
