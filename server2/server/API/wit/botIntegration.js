// import { Wit, log } from 'node-wit'
// import { SaveUserData, SaveRaw } from './saveUserData'
// import { CheckIfRequiredFieldsArePresent } from './checkIfRequiredFieldsArePresent'
// import { saveProvidedContext } from './context'
// import { pubsub } from '/server/subscriptions'
// import { Random } from 'meteor/random'
//
// const client = new Wit({
//   accessToken: 'VMKZTFAWBBMDCI2W2LGHSQ4LORB77LNL',
//   logger: new log.Logger(log.DEBUG) // optional
// })
//
// const responseText = [
//   {
//     id: '0',
//     message: 'Selecteer het kennisgebied?'
//   },
//   {
//     id: '1',
//     message: 'Wat voor type antwoord verwacht je?'
//   },
//   {
//     id: '2',
//     message: 'Super, daar kunnen we wat mee. We gebruiken slack.com om je quest in detail uit te werken. Je krijgt hiervoor een uitnodiging via email. Wat is je Email?'
//   },
//   {
//     id: '3',
//     message: 'Bedankt, als er updates zijn willen we je op de hoogte houden via je mobiel. Wat is je telefoonnummer?'
//   },
//   {
//     id: '4',
//     message: 'Bedankt, je krijgt zo een email. Kan je nog wat meer vertellen over wat je probeert op te lossen. Zo kunnen andere makkelijker met jou quest aan de slag'
//   },
//   {
//     id: '5',
//     message: 'Je telefoonnummer is niet helemaal goed overgekomen, zou je hem nogmaals willen geven?'
//   },
//   {
//     id: '6',
//     message: 'Je Email is niet helemaal goed overgekomen, zou je hem nogmaals willen geven?'
//   },
//   {
//     id: '7',
//     message: 'Ik ben een computer ik snap je nog niet, maar heb het opgeslagen. Ik hoop je in de toekomst wel te kunnen helpen met eenzelfde verzoek.'
//   },
//   {
//     id: '8',
//     message: 'uuhmm.. sorry ik kan de server niet bereiken, wil je toch nu een antwoord. bel Bram : 0637240733 Hij weet alles.'
//   },
//   {
//     id: '9',
//     message: 'Je quest heb ik niet begrepen, ik luister goed naar een zin die begint met #quest '
//   },
//   {
//     id: '10',
//     message: 'Binnen een uur ben je verbonden aan de juiste persoon, Heb je in de tussentijd een email ontvangen?'
//   },
//   {
//     id: '11',
//     message: 'Mooi, Nu zal iemand je quest claimen. Dit betekend dat die persoon verandwoordelijk wordt voor de afhandeling van je verzoek. '
//   },
//   {
//     id: '12',
//     message: 'Oei, we gaan nu kijken wat er fout is gegaan. Kunnen we je een SMS sturen als we de oplossing hebben? Wat is je telefoonnummer?'
//   },
//   {
//     id: '13',
//     message: 'Oei, we gaan nu kijken wat er fout is gegaan. Kunnen we je een SMS sturen als we de oplossing hebben? Wat is je telefoonnummer?'
//   }
// ]
//
// function sendMessageBot (id, responseNumber, conversationID) {
//   // console.log(id)
//   const payload = {
//     _id: conversationID,
//     messages: [{
//       _id: Random.id(),
//       text: responseText[responseNumber].message,
//       author: 'Bitler',
//       me: false
//     }]
//   }
//   pubsub.publish('messages', payload)
// }
//
// function sendMyMessage (message) {
//   // console.log(message)
//   const payload = {
//     _id: message.conversationID,
//     messages: [{
//       _id: message._id,
//       text: message.text,
//       author: message.author,
//       me: message.me,
//       conversationID: message.conversationID
//     }]
//   }
//   pubsub.publish('messages', payload)
// }
//
// export function ClientMessageAndResponse (message) {
//   // return message to the Chat interface
//   SaveRaw(message)
//   sendMyMessage(message)
//
//   client.message(message.text)
//    .then((response) => {
//     // console.log(response.msg_id)
//     SaveUserData(message.conversationID, response)
//     let missingFields = CheckIfRequiredFieldsArePresent(message.conversationID)
//     // console.log(missingFields)
//
//     if (response.entities.quest) { return sendMessageBot(message._id, 2, message.conversationID) }
//     if (response.entities.email) { return sendMessageBot(message._id, 4, message.conversationID) }
//     for (let missingField of missingFields) {
//       if (missingField === 'quest') { return sendMessageBot(message._id, 9, message.conversationID) }
//       if (missingField === 'email') { return sendMessageBot(message._id, 6, message.conversationID) }
//     }
//     // fields are complete, first awnser after this
//     if (saveProvidedContext(message)) { return sendMessageBot(message._id, 10, message.conversationID) }
//     if (response.entities.yes_no) {
//       if (response.entities.yes_no[0].value === 'ja') { return sendMessageBot(message._id, 11, message.conversationID) }
//       if (response.entities.yes_no[0].value === 'nee') { return sendMessageBot(message._id, 12, message.conversationID) }
//     }
//     // if () { sendMessageBot(message._id, 10) }
//     return sendMessageBot(message._id, 7, message.conversationID)
//   })
//   .catch(err => {
//     console.log(err)
//     return sendMessageBot(message._id, 8, message.conversationID)
//   })
// }
