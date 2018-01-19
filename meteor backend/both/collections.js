import {Mongo} from 'meteor/mongo';

export const skills = new Mongo.Collection('skill')
export const Quests = new Mongo.Collection('quests')
export const Messages = new Mongo.Collection('messages')
