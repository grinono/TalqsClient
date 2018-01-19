import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

//redux
import {connect} from "react-redux"
import * as actionCreators from '/imports/redux/actions/loginWindowAction'
import { bindActionCreators } from 'redux'

export class expert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginClick: false,
    }
  }

  start () {
      if (Meteor.user().emails) {
        // if already logedin push to wizard page onClick
        this.props.history.push('/wizard')
      }  else {
        // open login Window and set state to transite to wizard page after login is done
        console.log('all done')
        this.setState({loginClick : true})
        this.props.dispatch.LoginView(true)
      }
  }

  render() {
     // console.log(this.state.loginClick)

     // after login redirect to wizard page
    Tracker.autorun( ()=> {
      if(this.state.loginClick) {
        console.log('all done')
        this.props.history.push('/wizard')
      }
    });
    return (
      <div>
        <div className="content bottom-line">
          <div className="container" style={{paddingTop: 20}}>
            <div className="row">

              <div className="col-xs-12 col-sm-9 col-md- col-lg-9">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 double-col">
                  <h3>Meld je aan als expert</h3>
                  <div className="text-copy">
                  <RaisedButton onClick={this.start.bind(this)} label="Primary" primary={true} />

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    globalState : {
      showLogin : state.loginWindow.state.showLogin,
      showSignup : state.loginWindow.state.showSignup
    }
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps,mapDispatchToProps)(expert)
