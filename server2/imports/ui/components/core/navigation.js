import React , { Component } from 'react'
// import Login from '../userLogin/login'
// import SignUp from '../userLogin/signUp'

import {Link} from 'react-router-dom'
// import LoginMenu from '../userLogin/loginMenu'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

//redux
import {connect} from 'react-redux'
import * as actionCreators from '/imports/redux/actions/loginWindowAction'
import { bindActionCreators } from 'redux'

const style = {
  borderBottom: 'solid #d4d4d4',
  borderBottomWidth: '1px',
  backgroundColor: ''
}

// define and export our Navigation component
export class mainNavigation extends Component {
  displayName () {return ('Navigation')}

  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      showLoginMenu: false,
      showLoginText: true,
      showSignUp: false,
      showStart: true
    }
  }
  componentWillMount () {
    Tracker.autorun(() => {
      if (Meteor.user()) {
        if (Meteor.user().emails) {
          this.setState({showLoginMenu: true})
          this.setState({showStart: false})
          this.setState({showLoginText: false})
        }  else {
          this.setState({showLoginMenu: false})
          this.setState({showLoginText: true})
          this.setState({showStart: true})
        }
      }
    })
  }

  login (e) {
    // console.log('try to login')
    this.props.dispatch.LoginView(true)
  }

  handleLoginOutClick () {
    Meteor.logout()
    this.props.history.push('/')
  }

  pushToLocation (location) {
    // console.log(location)
    this.props.history.push(location)
  }

  render () {
    // console.log(this.props)
    return (
      <Toolbar style={style}>
        <ToolbarGroup firstChild={true}>
          <Link to="/">
            <img style={{marginLeft: '10px'}} className="navbar-image" width={45} src="/images/bitler-nav.png" />
          </Link>
          <p style={{marginTop: '30px'}}>Beta</p>
        </ToolbarGroup>
        <ToolbarGroup>
          {/* <ToolbarTitle text="over Bitler" /> */}
          <Link to="/about/about-us">Over bitler</Link>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

function mapStateToProps (state) {
  return {
    globalState: {
      showLogin: state.loginWindow.state.showLogin,
      showSignup: state.loginWindow.state.showSignup
    }
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(mainNavigation)

//
//
// import React , { Component } from 'react'
// import Login from '../userLogin/login'
// import SignUp from '../userLogin/signUp'
//
// import {Link} from 'react-router-dom'
// import LoginMenu from '../userLogin/loginMenu'
//
// //redux
// import {connect} from 'react-redux'
// import * as actionCreators from '/imports/redux/actions/loginWindowAction'
// import { bindActionCreators } from 'redux'
//
// // define and export our Navigation component
// export class mainNavigation extends Component {
//   displayName () {return ('Navigation')}
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       showLogin: false,
//       showLoginMenu: false,
//       showLoginText: true,
//       showSignUp: false,
//       showStart: true
//     }
//   }
//   componentWillMount () {
//     Tracker.autorun(() => {
//       if (Meteor.user()) {
//         if (Meteor.user().emails) {
//           this.setState({showLoginMenu: true})
//           this.setState({showStart: false})
//           this.setState({showLoginText: false})
//         }  else {
//           this.setState({showLoginMenu: false})
//           this.setState({showLoginText: true})
//           this.setState({showStart: true})
//         }
//       }
//     })
//   }
//
//   login (e) {
//     // console.log('try to login')
//     this.props.dispatch.LoginView(true)
//   }
//
//   handleLoginOutClick () {
//     Meteor.logout()
//     this.props.history.push('/')
//   }
//
//   pushToLocation (location) {
//     // console.log(location)
//     this.props.history.push(location)
//   }
//
//   render () {
//     // console.log(this.props)
//     return (
//       <div>
//         <nav className="navbar navbar-fixed-top">
//           <div className="navbar-header">
//             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//               <span className="sr-only">Toggle navigation</span>
//             </button>
//           </div>
//           <div id="navbar" className="collapse navbar-collapse">
//             <ul className="nav navbar-logo">
//               <li>
//                 <Link to="/">
//                   <img className="navbar-image" width={45} src="/images/bitler-nav.png" />
//                 </Link>
//               </li>
//             </ul>
//             <ul className="nav navbar-nav">
//              { /* <li className="active"><Link to="/expert">Begin Quest</Link></li>  */}
//              { this.state.showStart ? <li className="active"><Link to="/expert">Aanmelden</Link></li>  : null }
//                  {/*
//                       <li className="active"><Link to="/expert">Aanmelden</Link></li>
//                  */}
//               { this.state.showLoginText ? <li style={{cursor:"pointer"}}><a onClick={this.login.bind(this)} >Inloggen</a></li> : null }
//               <li><Link to="/about/about-us">Over bitler</Link></li>
//               { this.state.showLoginMenu ? <li><LoginMenu history={this.props.history} logout={this.handleLoginOutClick.bind(this)} /></li> : null }
//
//             </ul>
//           </div>
//         </nav>
//         <Login open={this.props.globalState.showLogin} dispatch={this.props.dispatch} />
//         <SignUp open={this.props.globalState.showSignup} dispatch={this.props.dispatch} />
//
//       </div>
//     )
//   }
// }
//
// function mapStateToProps (state) {
//   return {
//     globalState: {
//       showLogin: state.loginWindow.state.showLogin,
//       showSignup: state.loginWindow.state.showSignup
//     }
//   }
// }
//
// function mapDispatchToProps (dispatch) {
//   return { dispatch: bindActionCreators(actionCreators, dispatch) }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(mainNavigation)
