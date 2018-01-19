// import React, { Component } from 'react'
//
// import PropTypes from "prop-types"
// import ExpertMain from "../components/expertDetails/profilePage/expertMain"
// import ExpertExpertise from "../components/expertDetails/profilePage/expertExpertise"
// import ExpertAbout from "../components/expertDetails/profilePage/expertAbout"
// import Spinner from "../components/core/waitSpinner"
//
// import { gql, graphql } from 'react-apollo';
//
// class profile extends Component {
//
//   update() {
//     console.log("update now")
//     this.forceUpdate()
//   }
//
//   refetchData(){
//     console.log("refetch")
//     setTimeout( ()=> { this.props.data.refetch()},100 )
//
//   }
//   render() {
//     if (this.props.data.loading){
//       return (<Spinner />)
//     }
//     if (!this.props.data.experts) {
//       return (<p> Loading </p>)
//     }
//     // console.log(this.props.data.experts[0].profile.knowledge.skillsLabels)
//
//      return (
//       <div className="content bottom-line profile">
//          <div className="top" style={{background: "url('/images/bg_profile.jpg')" , backgroundSize: "100% 100%" }} >
//           <div className="container">
//             <ExpertMain
//               id={this.props.data.experts[0]._id }
//               name={this.props.data.experts[0].profile.name}
//               tagLine={this.props.data.experts[0].profile.about.tagLine}
//               helpWith={this.props.data.experts[0].profile.about.helpWithHeaderText}
//               status={this.props.data.experts[0].statusInfo.status}
//               profilePicture={this.props.data.experts[0].profile.profilePicture.cropped}
//               rating={this.props.data.experts[0].profile.rating.smartNumber}
//               match={this.props.match}
//               refetchData={this.refetchData.bind(this)}
//             />
//           </div>
//         </div>
//
//         <div className="profile1">
//           <div className="container">
//           <ExpertExpertise
//               expertiseLabels={this.props.data.experts[0].profile.knowledge.expertiseLabels}
//               expertise={this.props.data.experts[0].profile.about.expertiseDescription}
//               match={this.props.match}
//               refetchData={this.refetchData.bind(this)}
//           />
//           <ExpertAbout
//               name={this.props.data.experts[0].profile.name}
//               aboutDescription={this.props.data.experts[0].profile.about.aboutDescription}
//               skillsDescription={this.props.data.experts[0].profile.about.skillsDescription}
//               skillsLabels={this.props.data.experts[0].profile.knowledge.skillsLabels}
//               match={this.props.match}
//               refetchData={this.refetchData.bind(this)}
//           />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
//
// // Suppose our profile query took an avatar size
// const profileQuery = gql`
// query ($id: String) {
//   experts(query: {findExpertWithID: $id}) {
//     _id
//     statusInfo {
//       status
//       snoozeTimeMS
//     }
//     profile {
//       name
//       rating {
//         smartNumber
//       }
//       about {
//         helpWithHeaderText
//         tagLine
//         expertiseDescription
//         aboutDescription
//         skillsDescription
//       }
//       knowledge {
//         knowledgeAreaIDs
//         disciplineID
//         expertiseLabels {
//           id
//           label
//           value
//         }
//         skillsLabels {
//           _id
//           label
//           rating
//           value
//         }
//       }
//       details {
//         language
//         website
//       }
//       profilePicture {
//         large
//         search
//         S3url
//         cropped
//       }
//     }
//   }
// }
//
//
// `;
//
// profile.propTypes = {
//   data: PropTypes.shape({
//     loading: PropTypes.bool.isRequired,
//     currentUser: PropTypes.object,
//   }).isRequired,
// };
//
// const profileWithData = graphql(profileQuery, {
//   options: (ownProps) => ({
//       variables: {
//         id: ownProps.match.params.user
//       }
//   })
// })(profile);
//
// export default profileWithData
//
//
