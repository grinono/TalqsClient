// import {_} from 'meteor/underscore';
// import {Meteor} from 'meteor/meteor';
// import {resolveSkills, resolveExpertise} from "/server/users/resolveKnowledge"
// import {Mongo} from 'meteor/mongo';
//
// export const experts  = {
// 	Query: {
// 		experts(root, args, context) {
// 			// if ID is provided in the expert query expert search based on ID
// 			if (args.query.findExpertWithID != undefined) {
// 				// get the expert profile details
// 				const queryExpert = { "_id" : args.query.findExpertWithID};
// 				const expert = Meteor.users.find(queryExpert).fetch()
//
//
// 				// resolve expertiseLabels and SkillLabels from ID's
// 				let expertiseLabels = resolveExpertise(args.query.findExpertWithID)
// 				let skillLabels = resolveSkills(args.query.findExpertWithID)
//
//
// 				// add labels to expert Data
// 				expert[0].profile.knowledge.expertiseLabels = expertiseLabels
// 				expert[0].profile.knowledge.skillsLabels = skillLabels
//
// 				return (
// 					expert
// 				)
// 			}
//
// 			const knowledgeAreas = {"profile.knowledge.knowledgeAreaIDs": args.query.knowledgeAreas[0]}
// 			const disciplines ={"profile.knowledge.disciplineID": args.query.disciplines[0]}
// 			const sort = {}
// 			const query = { $or: [ knowledgeAreas , disciplines ] };
// 			const expertList = Meteor.users.find(query,{}).fetch();
//
// 			return expertList
// 		}
// 	}
// };
