import React, { Component } from 'react'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import { Random } from 'meteor/random'
import { gql, graphql } from 'react-apollo'
// import Message from 'anchor-ui/message'
// import { MessageList as list } from 'anchor-ui/message-list'
// import MessageInput from 'anchor-ui/message-input'
// import Menu from 'anchor-ui/menu'
// import Message from 'anchor-ui/message'
import MessageInput from 'anchor-ui/message-input';

import './App.css'

const style = {
  comp : {
    // margin : '0px',
    marginLeft: '0px'
  }
}

class Bot extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: [{ me: false, author: 'Bitler', body: 'Introduceer wat je zoekt, begin je zin met #quest' }],
      id: Random.id(),
      text: ''
    }
  }

  handleNewMessage (text) {
    // console.log(text.target.value)
    // console.log(this.refs.text.props.value)
    let textValue = this.refs.text.props.value
    // if (this.refs.text.props.value) {
    //   textValue = this.refs.text.props.value
    // } else {
    //   textValue = text.target.value
    // }
    this.props.mutate({
      variables: { text: textValue, _id: Random.id(), conversationID: this.state.id, author: 'Me', me: true }
    }).catch((error) => {
      console.log('there was an error sending the mutation', error)
    })
    this.setState({text: ''})
  }

  text (text) {
    // console.log(text.target.value)
    // console.log(this)
    this.setState({text: text.target.value})
    // console.log(text)
  }

  render () {
    // console.log(this)
    return (
      <div className="App">
        <MessageList id={this.state.id} messagesTyped={this.state.messages} />
        {/* <MessageForm onMessageSend={(e) => this.handleNewMessage(e)} /> */}
        <MessageInput
          placeholder={'berichten...'}
          onChange={(e) => this.text(e)}
          sendMessage={(e) => this.handleNewMessage(e)}
          value={this.state.text}
          ref={'text'}
          style={style.comp}
        />
      </div>
    )
  }
}

// Suppose our profile query took an avatar size
const profileQuery = gql`
mutation ($text: String, $_id: String, $author: String, $me: Boolean, $conversationID: String) {
  messages (text:$text, _id: $_id, author: $author, me: $me, conversationID: $conversationID) {
    text
    _id
    author
    me
    conversationID
  }
}
`

const avatarData = graphql(profileQuery)(Bot)

export default avatarData
