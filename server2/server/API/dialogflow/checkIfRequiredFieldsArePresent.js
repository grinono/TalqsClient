// import { Messages } from '/both/collections'
// import fetch from 'node-fetch'
//
// export function CheckIfRequiredFieldsArePresent (messageID) {
//   const msg = Messages.findOne({_id: messageID})
//   let allFields = new Set()
//   let keyAndValue = new Set()
//   for (let fields of msg.parsedMessageContent) {
//     allFields.add(Object.keys(fields.entities)[0])
//     if (Object.keys(fields.entities)[0] === 'quest') {
//       keyAndValue.add({'question': fields._text.replace('#quest ', '')})
//     }
//     // console.log(fields.entities.email[0].value)
//     if (Object.keys(fields.entities)[0] === 'email') {
//       keyAndValue.add({'email': fields.entities.email[0].value})
//     }
//     if (Object.keys(fields.entities)[0] === 'phone_number') {
//       // keyAndValue.add({'phone_number': fields.entities.phone_number[0].value})
//     }
//   }
//   const fieldsRequired = ['quest', 'email']
//   const missingFields = new Set([...fieldsRequired].filter(x => !allFields.has(x)))
//   // console.log(missingFields)
//   // all fields are provided to the ChatBot, NOW it's time to shoot
//   // let arrayFromKeyAndValue = Object.from(keyAndValue)
//   // console.log(arrayFromKeyAndValue)
//   if (missingFields.size === 0) {
//     // console.log('all Fields are present')
//     // let arrayFromKeyAndValue = Object.from(keyAndValue
//     const body = {}
//
//     for (let value of keyAndValue) {
//       console.log('val', value)
//       _.each(Object.keys(value), key => body[key] = value[key])
//     }
//     // SendToSlack(body)
//     return 'all'
//   }
//   // Some fields are missing, return a list of the missing fields
//   return missingFields
// }
//
// function SendToSlack (body) {
//   const url = 'https://www.startupbackend.com/bitler/initQuestion'
//   // Send fields to Micoservice BRAM
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   }).then((response) => {
//     return response.json()
//   }).then((data) => {
//     // return JSON response
//     console.log(data)
//   }).catch((err) => {
//     console.log(err)
//   })
// }
