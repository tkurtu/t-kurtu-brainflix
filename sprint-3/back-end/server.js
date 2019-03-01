const express = require ('express')
const cors = require('cors')
// const bodyParser= require('body-parser')
const app = express () 
const videosList = require('./routes/videosList')
const videoDetails = require('./routes/videoDetails')



app.use(cors())

// app.use(bodyParser.json())

// This attaches the router to the '/videos' path and array
// app.use('/videosList', videosList)

app.use('/videoslist', videosList),
app.use('/videoDetails', videoDetails)




app.listen(8080, () => {
  console.log('Listening on Port 8080...')
})


