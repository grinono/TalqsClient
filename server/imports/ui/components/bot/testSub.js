import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class sub extends Component {
  componentWillMount () {
    this.props.subscribeToNewMessages({
      text: 'gewoon iets'
    })
  }

  render () {
    console.log(this.props)
    return (
      <div >
        <p> haalo </p>
      </div>
    )
  }
}

const MESSAGES = gql`
query ($_id: String) {
  getMessages(_id: $_id) {
    text
    _id
  }
}
`

const MESSAGES_SUB = gql`
  subscription ($text: String, $_id: String) {
    messages(text: $text, _id: $_id) {
    text
    }
  }
`

const withData = graphql(MESSAGES, {
    name: 'messages',
    options: ({ params }) => ({
        variables: {
            _id: 'anything that is text'
        },
    }),
    props: props => {
      console.log(props)
        return {
            subscribeToNewMessages: params => {
              console.log(params)
                return props.messages.subscribeToMore({
                    document: MESSAGES_SUB,
                    variables: {
                        text: params.text,
                    },
                    updateQuery: (prev, {subscriptionData}) => {
                      console.log(prev)
                      console.log(subscriptionData)
                        // if (!subscriptionData.data) {
                        //     return prev
                        // }
                        // const newFeedItem = subscriptionData.data.commentAdded;
                        // return Object.assign({}, prev, {
                        //     entry: {
                        //         comments: [newFeedItem, ...prev.entry.comments]
                        //     }
                        // });
                    }
                });
            }
        };
    },
});

const CommentsPageWithData = withData(sub)
export default CommentsPageWithData
