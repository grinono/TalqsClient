import '../imports/startup/server'
import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express';
import schema from '/imports/api/schema'
import bodyParser from 'body-parser';
import { WebApp } from 'meteor/webapp' // Meteor-specific
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { createApolloServer } from 'meteor/apollo' // specific to Meteor, but you can always check out the Express implementation
import cors from 'cors'
import { createServer } from 'http';

// // any additional context you use for your resolvers, if any
//
const context = {}

console.log('hallo')
// start a graphql server with Express handling a possible Meteor current user
// if you're not using Meteor, check out https://github.com/apollographql/apollo-server for instructions on how to create a server in pure Node
createApolloServer({
	schema,
	context
}, {
	// // enable access to GraphQL API cross-domain (requires NPM "cors" package)
	configServer: expressServer => expressServer.use(cors()),
	graphiql: true //adds graphiql to production
})

// create subscription server
// non-Meteor implementation here: https://github.com/apollographql/subscriptions-transport-ws
new SubscriptionServer({
	schema,
	execute,
	subscribe,
	// // on connect subscription lifecycle event
	onConnect: (connectionParams, webSocket) => {
		console.log('connected!')
	  // if a meteor login token is passed to the connection params from the client,
	  // add the current user to the subscription context
	  // const subscriptionContext = connectionParams.authToken
	  //   ? await addCurrentUserToContext(context, connectionParams.authToken)
	  //   : context;
	  // return subscriptionContext;
	}
}, {
	server: WebApp.httpServer,
	path: '/subscriptions',
	// port: 4000
});
