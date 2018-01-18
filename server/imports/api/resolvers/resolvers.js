import { withFilter } from 'graphql-subscriptions'
import { pubsub } from '/server/subscriptions'
import { Messages } from '/both/collections'

export const resolvers = {
  Subscription: {
    messages: {
      resolve: (payload = {}, args, context, info) => {
        // console.log(payload)
        // check if last message is execly the same as this one.
        let messageDB = Messages.findOne({_id: payload._id})
        let lastMessage = messageDB.raw.slice(-1)[0]
        // console.log('check message differeance')
        // console.log(lastMessage)
        // console.log(payload.messages.text)
        if (lastMessage === payload.messages.text) {
          console.log('yes its the same one')
          return []
        }
        // console.log('sub msg', payload)
        return payload.messages
      },
      subscribe: withFilter(() => pubsub.asyncIterator('messages'), (payload, queryArgs) => {
        // console.log('args')
        // console.log(queryArgs)
        return payload._id === queryArgs._id
      })
    }
  },
  Query: {
    messages (root, {_id}) {
      // ClientMessageAndResponse(args)
      const messages = [{_id: 'messagesID', text: 'Vertel eens, waar loop je tegen aan?, begin je zin met #quest', author: 'Bitler', me: false}]
      pubsub.publish('messages', {
        _id,
        messages
      });
      return messages
    },
  },
  Mutation: {
  },

}
