// import React from 'react';
// import {
//   Step,
//   Stepper,
//   StepLabel,
//   StepContent,
// } from 'material-ui/Stepper';
// import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField'
//
// /**
//  * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
//  *
//  * To use the vertical stepper with the contained content as seen in spec examples,
//  * you must use the `<StepContent>` component inside the `<Step>`.
//  *
//  * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
//  */
// class VerticalLinearStepper extends React.Component {
//
//   state = {
//     finished: false,
//     stepIndex: 0,
//   };
//
//   handleNext = () => {
//     const {stepIndex} = this.state;
//     this.setState({
//       stepIndex: stepIndex + 1,
//       finished: stepIndex >= 2,
//     });
//   };
//
//   handlePrev = () => {
//     const {stepIndex} = this.state;
//     if (stepIndex > 0) {
//       this.setState({stepIndex: stepIndex - 1});
//     }
//   };
//
//   renderStepActions(step) {
//     const {stepIndex} = this.state;
//
//     return (
//       <div style={{margin: '12px 0'}}>
//         <RaisedButton
//           label={stepIndex === 2 ? 'Klaar' : 'Volgende'}
//           disableTouchRipple={true}
//           disableFocusRipple={true}
//           primary={true}
//           onClick={this.handleNext}
//           style={{marginRight: 12}}
//         />
//         {step > 0 && (
//           <FlatButton
//             style={{width:'30px'}}
//             label="Terug"
//             disabled={stepIndex === 0}
//             disableTouchRipple={true}
//             disableFocusRipple={true}
//             onClick={this.handlePrev}
//           />
//         )}
//       </div>
//     );
//   }
//
//   render() {
//     const {finished, stepIndex} = this.state;
//
//     return (
//       <div style={{maxWidth: 380, margin: 'auto'}}>
//         <Stepper activeStep={stepIndex} orientation="vertical">
//           <Step>
//             <StepLabel>Email</StepLabel>
//             <StepContent>
//               <div>
//                 <h2>Jouw quest zal worden behandeld in <a href='https://slack.com/'>Slack</a>.<br /></h2>
//                 <p> Met je email krijg je een uitnodiging voor een apart channel</p>
//                 <TextField
//                   hintText="Email"
//                 /><br />
//               </div>
//               {this.renderStepActions(0)}
//             </StepContent>
//           </Step>
//           <Step>
//             <StepLabel>TelefoonNummer</StepLabel>
//             <StepContent>
//               <div style={{margin: '50px 0px 50px 0px'}}>
//                 <h2>Blijf op de hoogte</h2>
//                 <p>Als er updates zijn laten we je het direct weten.</p>
//                 <TextField
//                   hintText="je telefoonnummer"
//                 /><br />
//               </div>
//               {this.renderStepActions(1)}
//             </StepContent>
//           </Step>
//           <Step>
//             <StepLabel>Wordt betrokken</StepLabel>
//             <StepContent>
//               <div style={{margin: '50px 0px 50px 0px'}}>
//                 <p>Bekijk je email voor een invite <br />
//                 Geef zo nodig een toelichting op je vraag <br />
//                 Meer context zal er voor zorgen dat je vraag beter behandeld kan worden.
//                 </p>
//               </div>
//               {this.renderStepActions(2)}
//             </StepContent>
//           </Step>
//         </Stepper>
//         {finished && (
//           this.props.history.push('/')
//         )}
//       </div>
//     );
//   }
// }
//
// export default VerticalLinearStepper;
