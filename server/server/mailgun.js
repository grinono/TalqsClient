// var api_key = 'key-42b487d465b99c77e393aa9f3d18d611';
// var domain = 'bitler.co';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
//
//
// export default function sendEmail (id,text,fromEmail) {
// 	// lookup email based on user ID
// 	const usersLookup = Meteor.users.find({_id:id}).fetch()
// 	const toEmail= usersLookup[0].emails[0].address
// 	console.log(toEmail)
// 	console.log(id,text,fromEmail)
//
// 	var data = {
// 	  from: 'Bitler vraag <vraag@bitler.co>',
// 	  to: toEmail,
// 	  subject: "Bitler vraag",
// 	  text: "je hebt een vraag van " + fromEmail + "de vraag is :" + text
// 	}
// 	mailgun.messages().send(data, function (error, body) {
// 	  console.log(body);
// 	})
//
// 	// console.log("email send")
// 	// return(
// 	// 	console.log("")
// 	// 	)
// }
//
//

export function SendEmail (email) {

  var api_key = 'key-42b487d465b99c77e393aa9f3d18d611'
  var domain = 'bitler.co'
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain})

  var data = {
    from: 'Excited User <bartel@bitler.co>',
    to: 'bartel@bitler.co',
    subject: 'NEW SLACK MEMBER',
    text: `this is the email ${email}`
  }

  mailgun.messages().send(data, function (error, body) {
    console.log(body)
  })
  console.log('close')
}
