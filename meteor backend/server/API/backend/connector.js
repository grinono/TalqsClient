import {ApolloClient} from 'apollo-client'
import { execute, makePromise } from 'apollo-link'
import { ApolloLink } from 'apollo-link'
import {HttpLink} from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {getOperationAST} from 'graphql'
import { gql } from 'react-apollo'
import { pubsub } from '/server/subscriptions'
import WebSocket from 'ws'
import fetch from 'node-fetch'
import { Random } from 'meteor/random'
import { Messages } from '/both/collections'


const GET_QUESTION_SUBSCRIPTION = gql`
subscription questionUpdated ($id: ID!) {
    questionUpdated(id: $id) {
        id
        bot {
          _id
          type
        }
        goal {
            _id,
            label
        }
        author {
            email,
            phone
            slackUser {
                _id,
            }
        },
        title
        messages {
            _id
            author {
                email
            }
            text
        }
    }
}
`

const SEND_QUEST = gql`
  mutation ($_id: ID, $text: String, $questionId: ID, $authorId: ID) {
    sendMessage (_id: $_id ,text: $text, questionId: $questionId, authorId: $authorId )
  }
`

const GET_QUESTION = gql`
  query question($id: ID!) {
    question(id: $id) {
        id
        bot {
          _id
          type
        }
        goal {
            _id,
            label
        }
        author {
            email,
            phone
            slackUser {
                _id,
            }
        },
        title
        messages {
            _id
            author {
                email
            }
            text
        }
    }
  }
`

// import GET_QUESTION from './graphql-queries/getQuestion.graphql'
// import GET_QUESTION_SUBSCRIPTION from './graphql-queries/getQuestionSubscription.graphql'
// import SEND_MESSAGE from './graphql-queries/sendMessage.graphql'

/* Initialize Apollo Client for GraphQL */

// You might want to set these manually if you're running your server somewhere else
// const httpUri = Meteor.absoluteUrl('graphql') // http://localhost:3000/graphql
// const wsUri = Meteor.absoluteUrl('subscriptions').replace(/^http/, 'ws') // ws://localhost:3000/subscriptions
const httpUri = 'https://www.startupbackend.com/graphql'
const wsUri = 'wss://www.startupbackend.com/subscriptions'

// Apollo 2.0 now uses the extensible "ApolloLink" (the following does not rely on Meteor)

const link = ApolloLink.split(
  operation => {
    const operationAST = getOperationAST(operation.query, operation.operationName)
    return !!operationAST && operationAST.operation === 'subscription'
  },
  new WebSocketLink({
    uri: wsUri,
    webSocketImpl: WebSocket,
    options: {
      reconnect: true
            }
        }),
        new HttpLink({uri: httpUri, fetch})
)

const cache = new InMemoryCache()

const client = new ApolloClient({
    link,
    cache
})

export function SendMessage (text, questionId, author, messageID) {
  // For single execution operations, a Promise can be used
  // console.log('send message to Slack' + text)
  makePromise((execute(link, {query: SEND_QUEST,
    variables: {
      _id: messageID,
      text: text,
      questionId: questionId,
      author: author
    }})))
    .then(data => {
      // console.log(`received data ${data}`)
      // console.log(data)
    })
    .catch(error => console.log(`received error ${error}`))
}

export function newSubscription (id) {
  const wsLink = new WebSocketLink({
    uri: wsUri,
    webSocketImpl: WebSocket,
    options: {
      reconnect: true
    }
  })
  // execute returns an Observable so it can be subscribed to
  execute(wsLink, {query: GET_QUESTION_SUBSCRIPTION,
    variables: {
      id: id
    }}).subscribe({
    next: data => console.log(`received data ${data}`),
    error: error => {
      console.log(error)
      console.log(`received error ${error}`)
    },
    complete: () => console.log(`complete`)
  })
}
// console.log(newSubscription('KTXLJT52hTo4Hi9THX'))
// const link = createHttpLink({ uri: '/graphql', fetch: fetch });
// newSubscription('KTXLJT52To4Hi9THX')

async function getMessages (id) {
  // console.log('all data')
  return Messages.findOne({_id: id})
}
//
// SendMessage('ik zoek een..', 'myIDisUUID', 'me')
export function subscribeToSlackChannel (questionId) {
  console.log('init Subscripition')
	client.watchQuery({
		query: GET_QUESTION,
		variables: {
      id : questionId
		}
	}).subscribe({
		next: ({errors, data} = {}) => {
			if (errors) {
				console.error('daErr21', errors)
			} else {
        // console.log('this subc data returned')
        // console.log(data.question)
        if (data.question.messages) {
          const lastMessage = data.question.messages.slice(-1)[0]
          // console.log('the last message')
          // console.log(lastMessage)
          // const msg = Messages.findOne({_id: data.question.id})
          getMessages(data.question.id).then((result) => {
            console.log(result)
            if (result.raw) {
              for (let message of result.raw) {
                if (message._id === lastMessage._id) {
                  return
                }
                // console.log('list message')
                // console.log(message)
              }
              const messageList = {
                _id: lastMessage._id,
                text: lastMessage.text,
                author: 'Bitler',
                me: false,
                conversationID: questionId
              }
              // }
              // console.log(messageList)
              let payload = ({
                _id: questionId,
                messages: [messageList]
              })
              pubsub.publish('messages', payload)
            }
          })
        }
        // Turnoff the Bot from Slack
        console.log('the data jho')
        console.log(data.question)
        console.log(data.question.bot)
        // console.log(lastMessage)
        if (data.question.bot) {
          if (data.question.bot.type === 'human') {
            console.log('Human is the bot')
          }
        }
      }
    },
    error: (error) => {
      console.error('daErr23', error)
    }
  })

	client.subscribe({
		query: GET_QUESTION_SUBSCRIPTION,
		variables: {
			"id": questionId
		}
	}).subscribe({
		next: ({errors, data} = {}) => {
			if (errors) {
				// console.error('daErr', errors)
			} else {
				// console.log('daData', data)
        // console.log('subscription data')
        // console.log(data)
				// this._var.set(data)
			}
			// this._isReady.set(true)
		},
		error: (error) => {
			console.error('daErr2', error)
		},
	})
}
