import { WebApp } from 'meteor/webapp'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function hook(req,res) {
  console.log(req.body)
  return res.status(200).json(returnBody)
}

const returnBody = {
"speech": "Barack Hussein Obama II was the 44th and current President of the United States.",
"displayText": "Barack Hussein Obama II was the 44th and current President of the United States, and the first African American to hold the office. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University   and Harvard Law School, where ",
// "data": {...},
// "contextOut": [...],
"source": "DuckDuckGo"
}

app.post('/api/hook', function (req, res) {
  // res.send('some news')
  // console.log('checkRequest')
  // console.log(req.headers.authorization)
  // username : dfskdfjsadklf
  // password : hannesafasjfsdklj32ds
  if (req.headers.authorization === 'Basic ZGZza2RmanNhZGtsZjpoYW5uZXNhZmFzamZzZGtsajMyZHM=') {
    hook(req)
    // res.send('some news')

  } else {
    res.send('Bad user/pass')
  }
  // console.log(res)
  // var post = req.body
  // if (post.user === 'john' && post.password === 'johnspassword') {
  //   req.session.user_id = johns_user_id_here;
  //   res.status(200).json({message: 'Hello from Express!!!'})
  //   // res.redirect('/my_secret_page');
  // } else {
  //   res.send('Bad user/pass')
  // }
})

// app.get('/api', checkAuth, (req, res) => {
//   res.status(200).json({message: 'Hello from Express!!!'})
// })

WebApp.connectHandlers.use(app)
