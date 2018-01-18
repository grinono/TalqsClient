import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import update from 'immutability-helper'
import './MessageList.css'
import { gql, graphql } from 'react-apollo'
 // import { Message as MessageItem} from 'anchor-ui/message';

// const propTypes = {
//   messages: PropTypes.arrayOf(PropTypes.object)
// }
//
// const defaultProps = {
//   messages: [],
// }

class MessageList extends Component {
  componentDidUpdate () {
    this.node.scrollTop = this.node.scrollHeight
  }

  componentWillMount () {
    this.props.subscribeToNewComments.subscribeToNewComments({
      _id: this.props.id
    })
  }

  // componentWillReceiveProps (newProps, props) {
  //   console.log(newProps)
  //   console.log(props)
  // }

  render () {
    // console.log(this.props)
    if (this.props.messages.messages) {
      return (
      // <div>
      //   <MessageItem />
      // </div>
        <div className="MessageList" ref={(node) => (this.node = node)}>
          {this.props.messages.messages.map((text, i) => (
            <Message key={i} {...text} />
          ))}

        </div>
      )
    }
    return (
      <div className="MessageList" ref={(node) => (this.node = node)}>
        {/* {this.props.messages.map((message, i) => (
          <Message key={i} {...message} />
        ))} */}
      </div>
    )
  }
}

const MESSAGES = gql`
  query ($_id: String) {
    messages (_id: $_id) {
      text
      _id
      author
      me
    }
  }
`

const MESSAGES_SUB = gql`
  subscription ($_id: String){
    messages (_id: $_id){
      text
      _id
      author
      me
    }
  }
`
const withData = graphql(MESSAGES, {
  name: 'messages',
  options: ({id: _id}) => {
    return ({
    variables: {
      _id
    }
  })},
  props: props => {
    // console.log(props)
    props.subscribeToNewComments = { subscribeToNewComments: ({_id}) => {
                return props.messages.subscribeToMore({
                    document: MESSAGES_SUB,
                    variables: {
                      _id
                    },
                    updateQuery: (prev, {subscriptionData}) => {
                      if (!subscriptionData.messages) {
                        return prev
                      }
                      // removing duplicates if last message is same as new message
                      const newMessage = subscriptionData.messages[0]
                      // console.log(newMessage)
                      // console.log(prev)
                      const newFeedItem = subscriptionData.messages
                      const newObject = Object.assign({
                        messages: [...prev.messages, ...newFeedItem]
                      })
                      props.messages = newObject
                      return newObject
                      // return subscriptionData
                    }
                  })
            }
      }
    // console.log(props)
    return props
  }
})
//
const CommentsPageWithData = withData(MessageList)
export default CommentsPageWithData
