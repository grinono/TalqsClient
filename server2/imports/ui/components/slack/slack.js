import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import './style.css'
// define and export our Navigation component
class slack extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  input (event) {
    console.log(event.target.value)
    this.setState({email: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.sendEmail()
    console.log(this.state.email)
  }

  sendEmail () {
    this.props.mutate({
      variables: {email: this.state.email}
    }).catch((error) => {
      console.log('there was an error sending the mutation', error)
    })
  }

  render () {
    return (
      <div>
        {/* <div className='SlackImage'> */}
        <img className='SlackImage' src='/images/slackBig.png'/>
        {/* </div> */}
        <div className="status js-response"><h2>Word onderdeel van de community</h2></div>
        <div className="dialog">
          <div className="row">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input className="primary js-input" placeholder="Jouw Email" type="text" value={this.state.email} onChange={this.input.bind(this)} />
              <button className="primary js-button" type="submit">ontvang uitnodiging</button>
            </form>
          </div>
          <div className="row note">Draag bij aan de nieuwe samenwerkings economie</div>
        </div>
      </div>
    )
  }
}

const CurrentUserForLayout = gql`
  mutation ($email: String) {
  emailInvite (email: $email)
  }
`

const ProfileWithData = graphql(CurrentUserForLayout)(slack)

export default ProfileWithData
