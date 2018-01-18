import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar';
import { gql, graphql } from 'react-apollo';

// define and export our Navigation component
export class myAvatar extends Component {
  displayName() {return ('Navigation')}

  constructor(props) {
    super(props);
  }

  avatarImage () {
    let id =  Meteor.userId()
    // if comment has a name and picture set return this picture
    if (this.props.name && this.props.picture) {
      return (this.props.picture)
    }
    // the below case is write a comment section and own Picture need to be shown if available
    if (this.props.data.experts && this.props.data.experts[0].profile.profilePicture.large) {
      return (this.props.data.experts[0].profile.profilePicture.large)
    }
    return (
        `https://robohash.org/${id}.png`
    )
  }

  render() {
    return (
      <div>
        <Avatar src={this.avatarImage()} />
      </div>
    );
  }
}


// Suppose our profile query took an avatar size
const profileQuery = gql`
query ($id: String) {
  experts(query: {findExpertWithID: $id}) {
      profile {
      profilePicture {
        large
        search
        S3url
        cropped
      }
    }  
  }
}
`;


const avatarData = graphql(profileQuery, {
  options: (ownProps) => ({ 
      variables: { 
        id: Meteor.userId()
      } 
  })
})(myAvatar);

export default avatarData
