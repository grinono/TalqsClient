const editorExtensionId = Meteor.settings.public.chromeExtension.id

export function updateUserLoginToken(currentTokenRemainsValid,cb) {
	// console.log("updating loginToken")
	//get a token
	if(!window.chrome) return;
	const userId = Meteor.userId();
	Meteor.call('createUserLoginToken', (err, userLoginToken) => {
		window.chrome.runtime.sendMessage(editorExtensionId, {userLoginToken, userId}, oldToken => {
			if (!oldToken || currentTokenRemainsValid) return cb && cb();
			Meteor.call('invalidateUserLoginToken', oldToken, cb);
		});
	});
}

export function getUserLoginToken(cb) {
	if(!window.chrome) return;
	window.chrome.runtime.sendMessage(editorExtensionId, 'getUserLoginToken', (loginToken) => {
		cb(loginToken);
	});
}
