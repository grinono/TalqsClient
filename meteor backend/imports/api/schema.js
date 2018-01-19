import { makeExecutableSchema } from 'graphql-tools';
import { Random } from 'meteor/random';
import { merge } from 'lodash';
import {resolvers} from "./resolvers/resolvers"

export const typeDefs = `
    type Messages {
      text : String
      _id : String
      author : String
      me : Boolean
      conversationID: String
    }
    type Mutation {
        messages (text : String, _id: String, author: String, me: Boolean, conversationID: String): [Messages]
    }
    type Query {
      messages (_id : String, text: String, author: String, me: Boolean, conversationID: String): [Messages]
    }
    type Subscription {
      messages(_id : String, text: String, author: String, me: Boolean): [Messages]
    }
    schema {
      query: Query,
      mutation: Mutation
      subscription: Subscription
    }
`;

export default makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: merge(resolvers)
})
