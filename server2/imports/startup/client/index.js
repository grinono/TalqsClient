// React Router
import './routes'

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export const User = {
  get: function() {
    return Meteor.user() || {};
  },

  id: function() {
    return Meteor.userId();
  },

  isLoggedIn: function() {
    return !! Meteor.userId();
  },

  isLoggedOut: function() {
    return ! User.isLoggedIn();
  },

  profile: function() {
    return User.get().profile;
  },

  create: function(opts, callback) {
    Accounts.createUser(opts, callback);
  }
};

"use strict";
/* globals AccountsAnonymousAuto: true, AccountsAnonymous */


Tracker.autorun(function () {
	if (! Meteor.userId()) {
		//only create anonymous if not logged in within 10 seconds.
	  	setTimeout(() => {
	    	if(!Meteor.userId()) AccountsAnonymous.login();
		}, 1000)
	}
});

