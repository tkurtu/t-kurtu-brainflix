const express = require('express')
const router = express.Router()
const fs = require('fs');
const bodyParser= require('body-parser')
const videoList = require('./videoList') //videoList
const videos = require('./videos')

router.use(bodyParser.json())

  
router.get('/', (req, res) => {
  res.json(videos)
})

router.get('/:id', (req, res) => { 
  const videoData = videoList.find(video => video.id === req.params.id)
  res.json(videoData)
})


router.post('/', (req, res) => {
  const singleVideo = {
    "id": "1aivjrugtu6m",
    "title": "Experimenting with Express Router!",
    "channel": "Tas Talks",
    "image": "https://i.imgur.com/eknVBeg.jpg",
  }

  const videoDetail =  {
    "id": "1aivjrugtu6m",
    "title": "Experimenting with Express Router!",
    "channel": "Tas Talks",
    "image": "https://i.imgur.com/eknVBeg.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "views": "1,001,023",
    "likes": "110,985",
    "duration": "4:01",
    "timestamp": 1545162149000,
    "comments": []
  }


  videos.push(singleVideo)
  videoList.push(videoDetail)

  fs.writeFileSync('./routes/videos.json', JSON.stringify(videos));
  fs.writeFileSync('./routes/videoList.json', JSON.stringify(videoList));
  console.log('Done') 
})

// router.post('/', (req, res) => {

// }



module.exports = router 












// router.get('/videoList', (req, res) => {
//   res.json(videoList)
// })

// const string = JSON.stringify(videos.json)
// fs.writeFileSync('videos.json', string)
// console.log('Done')

 // const output = JSON.stringify(videoDetail, singleVideo)
  //   fs.writeFileSync('./videos.json', output);
  //   fs.writeFileSync('./videoList.json', output);