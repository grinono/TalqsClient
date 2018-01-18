// import React, { Component } from 'react'
// import { withApollo } from 'react-apollo';
// import gql from 'graphql-tag';
// import queryString from 'query-string'
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
// import SendEmail from "../components/other/sendEmails"
//
//
// class sendMessage extends Component {
//   constructor(props) {
//     super(props),
//     this.state = {
//           email: '',
//           text: '',
//         }
//   }
//
//   email (event){
//     this.setState({ email: event.target.value });
//   }
//
//   text (event){
//     this.setState({ text: event.target.value });
//   }
//
//   sendEmailll(adres){
//     const URLparsed = queryString.parse(this.props.location.search);
//     const emailFrom = this.state.email
//     const text = this.state.text
//     const sendID = URLparsed.sendID
//     console.log(sendID,text,emailFrom)
//
//     this.props.client.query({
//       query: gql` query sendEmail ($id: String, $text: String, $from: String) {
//     sendEmail(id: $id, text: $text, from: $from) {
//       done
//     }
//     }`,
//       variables: {
//         "id": sendID,
//         "text": text,
//         "from": emailFrom
//       },
//     });
//
//
//   }
//
//   render() {
//     const URLparsed = queryString.parse(this.props.location.search);
//     return (
//        <div>
//
//         <div className="content bottom-line">
//           <div className="container" style={{paddingTop: 20}}>
//             <div className="row">
//
//               <div className="col-xs-12 col-sm-9 col-md- col-lg-9">
//                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 double-col">
//                   <h3>Stuur een bericht naar {URLparsed.name}</h3>
//                   <div className="text-copy">
//
//                         <TextField
//                           hintText="Jou email adress "
//                           onChange={ this.email.bind(this) }
//                         /><br />
//                         <TextField
//                           floatingLabelText="Stel hier je vraag"
//                           multiLine={true}
//                           rows={2}
//                           onChange={ this.text.bind(this) }
//                         /><br /> <br />
//                         <RaisedButton  onClick={this.sendEmailll.bind(this)} label="verstuur"  />
//
//
//                   </div>
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
//
//
// export default  withApollo(sendMessage);
//
