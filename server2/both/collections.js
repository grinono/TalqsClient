import {Mongo} from 'meteor/mongo';

export const skills = new Mongo.Collection('skill')
export const Quests = new Mongo.Collection('quests')
export const Messages = new Mongo.Collection('messages')
// export const Quests = new Mongo.Collection('quests');
// export const expertise = new Mongo.Collection('expertise');

//
// code used to generate random Value for all Skills in the skill collection
//

// function randomString(len, an){
//     an = an&&an.toLowerCase();
//     var str="", i=0, min=an=="a"?10:0, max=an=="n"?10:62;
//     for(;i++<len;){
//       var r = Math.random()*(max-min)+min <<0;
//       str += String.fromCharCode(r+=r>9?r<36?55:61:48);
//     }
//     return str;
// }


// skills.find({}).forEach(function(mydoc) {
// 	// console.log(mydoc)
//   skills.update({_id: mydoc._id}, {$set: {value: randomString(10)}})
// })
