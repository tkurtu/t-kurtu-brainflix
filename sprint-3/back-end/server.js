const fs = require('fs')
const express = require ('express')
const cors = require('cors')
// const bodyParser= require('body-parser')
const app = express () 
const videosList = require('./routes/videosList')
const videos = require('./routes/videos')

app.use(cors())
// app.use(bodyParser.json())

// This attaches the router to the '/videos' path and array
// app.use('/videosList', videosList)

app.use('/videosList', videosList),
app.use('/videos', videos)




app.listen(8080, () => {
  console.log('Listening on Port 8080...')
})




// const express = require('express')
// const router = express.Router()
// const videosList = require('./videosList')
// const videoDetailes = require ('./videosDetails')



// router.get('/', (req, res) => {
//   res.json()
// })

// router.get('/', (req, res) => {
//   res.json()
// })



// module.exports = router