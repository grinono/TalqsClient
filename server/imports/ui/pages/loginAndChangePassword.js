// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { Accounts } from 'meteor/accounts-base'
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
//
// export default class faq extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         password: {}
//     };
//   }
//
//   changePassword() {
//     password = this.state.password
//     // console.log(password)
//   Meteor.call("setPassword", password: password )
//
//   }
//
//   onChange (event) {
//     console.log(event.target.value)
//     this.setState({ password :  event.target.value })
//   }
//
//   render() {
//      console.log(this.props.match.params.loginToken)
//      Meteor.loginWithToken(this.props.match.params.loginToken);
//
//     return (
//       <div>
//
//         <div className="content bottom-line">
//           <div className="container" style={{paddingTop: 20}}>
//             <div className="row">
//
//               <div className="col-xs-12 col-sm-9 col-md- col-lg-9">
//                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 double-col">
//                   <h3>Stel je Bitler password in</h3>
//                     <TextField
//                       hintText="Je nieuwe wachtword"
//                       type="password"
//                       onChange={this.onChange.bind(this)}
//                     />
//                     <br /><br />
//                     <RaisedButton onClick={this.changePassword.bind(this)} label="pas aan"/>
//
//                 </div>
//
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
