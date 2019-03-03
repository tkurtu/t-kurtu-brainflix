const express = require ('express')
const cors = require('cors')
const app = express () 
const routes = require('./routes/routes')
const PORT = process.env.PORT || 8080


app.use(cors())

app.use('/videos', routes),


app.listen(8080, () => {
  console.log(`Listening on Port ${PORT}...`)
})













// This attaches the router to the '/videos' path and array
// app.use('/videosList', videosList)

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