import { makeExecutableSchema } from 'graphql-tools';
import { Random } from 'meteor/random';
import { merge } from 'lodash';
import {disciplineCol,knowledgeAreaCol } from "../../both/marketAbilities/collections"
import {experts} from './resolvers/experts'
import {user} from './resolvers/user'
import {resolvers} from "./resolvers/resolvers"
import {snooze} from "./resolvers/snooze"

import Discipline from './schema/discipline'
import Email from './schema/email'
import SendEmail from './schema/sendEmail'
import KnowledgeArea from './schema/knowledgeArea'
import Room from './schema/room'
import User from './schema/user'
import UserStatusInfo from './schema/userStatusInfo'
import MutationResult from './schema/mutationResult'
import ExpertQuery from './schema/expertQuery'
import Skills from './schema/skills'

export const typeDefs = `
    input skillList {
      _id: String
      label: String
      value: String
    }
    type UpdateDiscipline {
      label : String
      value : Int
      _id : String
    }
    type UpdateKnowledgeArea {
      label : String
      value : Int
      _id : String
    }
    type Messages {
      text : String
      _id : String
      author : String
      me : Boolean
      conversationID: String
    }
    type Mutation {
      messages (text : String, _id: String, author: String, me: Boolean, conversationID: String): [Messages]
      updateDiscipline(label: String, value : Int, _id: String): UpdateDiscipline
      updateKnowledgeArea(userId: String): UpdateKnowledgeArea
      emailInvite (email: String): String
      upsertRoom(_id: String, callerId: String, calleeId: String, logMessages: [String], status: String): Room
      setSnooze(snoozeTimeMS:Int) : MutationResult
      editProfile (
        name: String,
        tagLine : String,
        helpWithHeaderText: String,
        expertiseDescription : String,
        expertiseIDs : String,
        aboutDescription : String,
        skillsDescription: String,
        skills : [skillList]
      ) : User
    }
    type Query {
      discipline : [Discipline],
      knowledgeArea(discipline: String!) : [KnowledgeArea],
      room(
        _id: String,
        callerId: String,
        calleeId: String,
        status: [String]
      ): Room
      messages (_id : String, text: String, author: String, me: Boolean, conversationID: String): [Messages]
      userStatusInfo : UserStatusInfo
      experts(query: ExpertQuery): [User]
      sendEmail (id:String,text:String,from:String) : [SendEmail]
      skillList (startWith: String!): [Skills]
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
  typeDefs: [typeDefs, Discipline, Email, SendEmail, KnowledgeArea, Room, User, UserStatusInfo, MutationResult, ExpertQuery,Skills],
  resolvers: merge(resolvers, snooze, experts, user)
})
