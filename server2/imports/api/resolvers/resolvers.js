import {roomCol, upsertRoom} from '/both/rooms'
import {knowledgeAreaCol, disciplineCol} from '/both/marketAbilities/collections'
import { ClientMessageAndResponse } from '/server/API/dialogflow/dialogflow'
import { SendEmail } from '/server/mailgun'
import {skills} from '/both/collections'
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
    discipline (root, args) {
      return disciplineCol.find({}).fetch()
    },
    knowledgeArea (root, args) {
      return knowledgeAreaCol.find({_disciplineId : args.discipline}).fetch()
    },
    room (root, args) {
		  const query = _.extend(args);
		  if(query.status) {
		    query.status = {$in: query.status};
      }
      return roomCol.findOne(query);
    },
    // userStatusInfo(root, args, context) {
    //   // console.log(context)
    //   if (!context.user._id) return {};
    //   Meteor.users.update({_id: context.user._id}, {$set: {'status.lastPoll': new Date()}});
    //   return resolveStatusInfo(context.user);
    // },
    sendEmail (root, args) {
      // console.log(args)
      SendEmail (args.id, args.text, args.from)
    },
    skillList (root,args) {
      const regex = new RegExp('^' + args.startWith, 'i')
      // console.log(regex)
      return skills.find({ "label": { $regex: regex }  }).fetch()
    }
  },
  Mutation: {
    emailInvite (root, args) {
      SendEmail(args.email)
      console.log(args)
    },
		messages (root, args, context) {
      // console.log(args)
      ClientMessageAndResponse(args)
      // console.log('the text:' + botText)
      // const text = {text: 'deze misschien'}
      return ([args])
    },
    updateDiscipline (root, args, context) {
      Meteor.users.update({
        _id: context.userId
        }, {$set:  {"profile.knowledge.discipline": args }
      });
      return (args)
    },
    updateKnowledgeArea(root, args, context) {
      Meteor.users.update({
        _id: context.userId
        }, {$set:  {"profile.knowledge.sub": args }
      });
      return (args)
    },
    upsertRoom(root, args, context) {
			//TODO: Check for valid userIds
			const userId = context.userId;

			return upsertRoom(args, context.user._id);
    },
    editProfile(root,args,context) {
      // console.log(args)
      if (args.name) {
          Meteor.users.update({
        _id: context.userId
        }, {$set:  {
          "profile.name": args.name,
          "profile.about.tagLine" : args.tagLine,
          "profile.about.helpWithHeaderText" : args.helpWithHeaderText,
        }
        });
      }
      if (args.expertiseDescription)
      Meteor.users.update({
        _id: context.userId
        }, {$set:  {
          "profile.about.expertiseDescription" : args.expertiseDescription,
        }
      });
      if (args.aboutDescription) {
        Meteor.users.update({
        _id: context.userId
        }, {$set:  {
          "profile.about.aboutDescription" : args.aboutDescription,
        }
      });
      }
      if (args.skillsDescription) {
        Meteor.users.update({
          _id: context.userId
          }, {$set:  {
            "profile.about.skillsDescription" : args.skillsDescription,
          }
        });
      }
      if (args.skills) {
        // console.log(args.skills)
        Meteor.users.update({
          _id: context.userId
          }, {$set:  {
            "profile.knowledge.skillsIDs" : args.skills,
          }
        });
      }

      userDetails =  Meteor.users.findOne({_id : context.user._id })
      return (userDetails)
    }
  },
  UpdateDiscipline : {
    label : (args) => args.label,
    value : (args) => args.value,
    _id : (args) => args._id,

  },
  Discipline: {
    _id : (label) => label._id,
    label : (label) => label.label,
    value : (label) => label.value
  },
  KnowledgeArea: {
    label : (label) => label.label,
    value : (label) => label.value
  },
  Room: {
    _id: (parent) => {
      return parent._id
    },
    callee: ({calleeId}) => Meteor.users.findOne(calleeId),
    caller: ({callerId}) => Meteor.users.findOne(callerId)
  }
}
