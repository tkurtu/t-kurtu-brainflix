const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');
const videoList = require('./videoList');
const videos = require('./videos');
const cors = require('cors');
const uniqid = require('uniqid');

router.use(cors());
router.use(bodyParser.json());
router.use(express.static('public'));

router.get('/', (req, res) => {
	res.json(videos);
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	const videoData = videoList.find(video => {
		return video.id === id;
	});
	res.json(videoData);
});

router.post('/', (req, res) => {
  console.log(req.body)
	const singleVideo = {
		id: uniqid(),
		title: req.body.title,
		channel: 'Tas Talks',
		image: 'https://i.imgur.com/eknVBeg.jpg'
	};

	const videoDetail = {
		id: singleVideo.id,
		title: req.body.title,
		channel: 'Tas Talks',
		image: 'https://i.imgur.com/eknVBeg.jpg',
		description: req.body.description,
		views: '5,001,023',
		likes: '1,985',
		duration: '00:10',
		video: 'https://project-2-api.herokuapp.com/stream',
    timestamp: 1545162149000,
    comments:[]
	};

	videos.push(singleVideo);
	videoList.push(videoDetail);

	fs.writeFileSync('./routes/videos.json', JSON.stringify(videos));
	fs.writeFileSync('./routes/videoList.json', JSON.stringify(videoList));
	res.send(singleVideo);
	res.send(videoDetail);
});


module.exports = router;

