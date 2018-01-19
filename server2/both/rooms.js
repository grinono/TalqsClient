import {Mongo} from 'meteor/mongo';

export const roomCol = new Mongo.Collection('rooms');

export function upsertRoom(update, userId) {
	// userId is undefined
	console.log(userId)


	let roomId = update._id;
	if (!roomId) {
		//insert
		roomId = roomCol.insert(_.extend({callerId: userId}, update));
	} else {
		//update

		const roomChanges = _.clone(update);
		if (roomChanges.logMessages) {
			const logs = _.map(roomChanges.logMessages, msg => ({from: userId, msg, date: new Date()}));
			roomCol.update(roomId, {$push: {logMessages: {$each: logs}}});
			delete roomChanges.logMessages;
		}
		const modifier = {$set: _.extend(roomChanges, {status: getStatus(roomId)})};
		// console.log(modifier)
		roomCol.update(roomId, modifier);
	}
	return roomCol.findOne(roomId);
}

function getStatus(roomId) {
	//TODO: investigate if we can resolve this with video server callbacks
	const room = roomCol.findOne(roomId);
	const calleeId = room.calleeId;
	const callerId = room.callerId;
	// console.log(room)

	//the division remainder of participantJoined and videoConferenceJoined should be 0 in case of 2
	const caller = {
		awaitingCalleeAcceptance: 0,
		entered: 0,
		greeted: 0,
		left: 0,
		dropped: 0
	};
	
	const callee = {
		entered: 0,
		greeted: 0,
		left: 0,
		dropped: 0,
		accepted: 0,
		rejected: 0
	};

	_.each(room.logMessages, log => {
		if(log.from !== callerId && log.from !== calleeId) return; //only take participant logs into account
		const attendee = log.from === callerId ? caller : callee;
		_.each(attendee, (amount, logType) => {
			if(log.msg.indexOf(logType) === 0) attendee[logType] += 1;
		});
	});
	
	let status;
	const callerPresent = caller.entered > caller.left;
	const calleePresent = callee.entered > callee.left;
	if(callee.rejected > 0) {
		if (callee.entered > 0) {
			status = 'finished'
		} else {
			status = 'rejected'
		}
	} else if(callee.accepted > callee.entered) {
		status = 'calleeAccepted';
	} else if(caller.awaitingCalleeAcceptance > caller.entered) {
		status = 'awaitingCalleeAcceptance';
	} else if(callerPresent && calleePresent) {
		status = 'bitler';
	} else if (callerPresent) {
		status = 'awaitingCallee';
	} else if (calleePresent) {
		status = 'awaitingCaller';
	} else if (caller.entered > 0) {
		if(callee.entered > 0) status = 'finished';
		else status = 'noAnswer';
	}

	return status || room.status;

}