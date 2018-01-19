import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'

// Google Analitics
import ReactGA from 'react-ga';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Apollo client implementation
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
// import { BatchHttpLink } from 'apollo-link-batch-http'
import {InMemoryCache} from "apollo-cache-inmemory";
import { split } from 'apollo-link'
import { WebSocketLink }  from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { getOperationAST } from 'graphql';
import { getMainDefinition } from 'apollo-utilities';
// Extend the network interface with the WebSocket

ReactGA.initialize('UA-84812655-1', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});

function Analytics (props) {
  ReactGA.set({ page: props.location.pathname + props.location.search })
  ReactGA.pageview(props.location.pathname + props.location.search)
  return null
}

const httpUri = Meteor.absoluteUrl('graphql'); // http://localhost:3000/graphql
const wsUri = Meteor.absoluteUrl('subscriptions').replace(/^http/, 'ws'); // ws://localhost:3000/subscriptions

// Create an http link:
const httpLink = new HttpLink({
  uri: httpUri
});
// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true
  }
});

const hasSubscriptionOperation = ({ query: { definitions } }) =>
  definitions.some(
    ({ kind, operation }) =>
      kind === 'OperationDefinition' && operation === 'subscription',
  )

const link = split(
  // split based on operation type
  hasSubscriptionOperation,
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})

// pages
import Home from '../../ui/pages/Home'
import Search from '../../ui/pages/search'
// import Profile from '../../ui/pages/profile'
import About from '../../ui/pages/about'
import Team from '../../ui/pages/team'
import Faq from '../../ui/pages/faq.js'
import Contact from '../../ui/pages/contact.js'
// import SendMessage from '../../ui/pages/messages'
// import Extension from '../../ui/pages/extension'
// import ExtensionLogin from '../../ui/pages/extensionLogin'
// import Expert from '../../ui/pages/expert'
import Terms from '../../ui/pages/terms'
// import LoginAndChangePassword from '../../ui/pages/loginAndChangePassword'
// import Wizard from '../../ui/pages/wizard'
// import Quest from '../../ui/pages/quest'
// import startQuest from '../../ui/pages/startQuest'
import Blog from '../../ui/pages/blog'
import Quest from '../../ui/components/quest/quest'

// layout
import Navigation from '../../ui/components/core/navigation.js';
import Footer from '../../ui/components/core/footer';
import LeftNav from '../../ui/components/core/leftNav';
import SubMenu from '../../ui/components/core/submenu';

// other
import Helmet from '../../ui/components/core/helmet';
// import VideoCallContainer from '../../ui/components/video/videoCallContainer';

// Search
// import SearchRedirect from '../../ui/components/search/searchRedirect';

// video
// import VideoCallRedirect from '../../ui/components/video/popup';

//
// redux react impl
//
import store from "../../redux/store"

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const AboutLayout = ({ match }) => (
  <div>
    <SubMenu  />
      <Route path={`${match.url}/about-us`} render={ ()=> (<LeftNav child={<About />}/>) }/>
      <Route path={`${match.url}/team`} render={() => (<LeftNav child={<Team />}/>) }/>
    <Route path={`${match.url}/faq`} component={Faq} />
    <Route path={`${match.url}/contact`} component={Contact} />
    <Route path={`${match.url}/blog`} component={Blog} />
  </div>
)

const videoCallPage = ({ match }) => (
  <div>
    <Route path={`${match.url}/faq`} component={Faq} />
  </div>
)

const routeManager = ({ match }) => {
  if ( match.url.startsWith("/searchredirect") ) {
    return (
      <Route path="/searchRedirect/:discipline/:knowledge" component={SearchRedirect} />
    )
  }
  if ( match.url.startsWith("/callredirect") ) {
    return (
      <Route path="/callredirect/:calleeId" component={VideoCallRedirect} />
    )
  }
  if ( match.url.startsWith("/videoCall") ) {
    return (
        <div>
          <Route exact path="/videoCall/:roomId" component={VideoCallContainer} />
          <Route exact path="/videoCall/:roomId/:userId" component={VideoCallContainer} />
        </div>
      )
  } else {
    // import general styles css
      import '/imports/ui/style/main'
      import '/imports/ui/style/media'

    return (
        <div>
                {/* <Helmet /> */}
                <Route path="/" component={Analytics}/>
                <Route component={Navigation} />
                <Route path="/about" component={AboutLayout} />
                <Route exact path="/" component={Home} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/q" component={Quest} />
                <Route exact path="/q/:questID" component={Quest} />
                <Footer/>
          </div>
    )
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1585e0',
    primary2Color: '#1585e0',
    primary3Color: '#1585e0',
    accent1Color: '#1585e0',
    accent2Color: '#1585e0',
    accent3Color: '#1585e0',
    // textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack,
  }
});

const routes = (
  <div className="app">
   <Provider store={store}>
        <ApolloProvider client={client}>
          	<MuiThemeProvider muiTheme={muiTheme}>
              <Router onUpdate={logPageView } >
                <div>
                  <Route component={ScrollToTop} />
                  <Route path="*"  component={routeManager} />
                </div>
              </Router>
          	</MuiThemeProvider>
        </ApolloProvider>
    </Provider>
  </div>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.bitler'))
})


// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
