const express = require('express')
const router = express.Router()
// const fs = require('fs');
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


// A POST endpoint for the path /videos. This should add a new video to the video list on the page. Remember you will need to generate a unique id for this video.
router.post('/', (req, res) => {
  var singleVideo =  {
    "id": "1aivjrugtu6m",
    "title": "Experimenting with Express Router!",
    "channel": "Tas Talks",
    "image": "https://i.imgur.com/eknVBeg.jpg",
  }


  var videoDetail =  {
    "id": "1aivjrugtu6m",
    "title": "Experimenting with Express Router!",
    "channel": "Tas Talks",
    "image": "https://i.imgur.com/eknVBeg.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "views": "1,001,023",
    "likes": "110,985",
    "duration": "4:01",
    "timestamp": 1545162149000,
    "comments": [
      {
      "name": "Jane Doe",
      "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
      "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
      "likes": 0,
      "timestamp": 1545162149000
      },
      {
      "name": "John Smith",
      "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
      "likes": 0,
      "timestamp": 1544595784046
      },
      {
      "name": "Kurtu Tasneem",
      "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
      "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
      "likes": 0,
      "timestamp": 1542262984046
      }
    ]
  }


  videos.push(singleVideo)
  videoList.push(videoDetail)

  // res.json(videos)
})



module.exports = router 












// router.get('/videoList', (req, res) => {
//   res.json(videoList)
// })

// const string = JSON.stringify(videos.json)
// fs.writeFileSync('videos.json', string)
// console.log('Done')