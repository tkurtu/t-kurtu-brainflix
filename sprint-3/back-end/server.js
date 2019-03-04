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

