import React from 'react';
import Videos from './components/Videos';
import './styles/index.css';
import Header from './components/Header'
import Currentvideo from './components/Currentvideo';
import Videotitle from './components/Videotitle';
import FormComments from './components/FormComments';
import Comments from './components/Comments';
import axios from 'axios';


const videoUrl = 'https://project-2-api.herokuapp.com/videos/'
const myKey = '?api_key=c38ea111-7d11-400d-a33b-ab86b765b9b6'
const currentPlaying = id => `http://project-2-api.herokuapp.com/videos/${id}${myKey}`


class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {
      videoData: [], //list of side videos
      videoInfo: [],// video titles, likes, views, date, etc.
      videoComments: [], //comments 
      videoThumbnail: [], //currently playing video 
      loopingVideo: [], //video of rabbit
      videoId: '', //id of each single video
      loading: true //page is loading
    }
  }
 
  componentDidMount() {
    axios.get(videoUrl + myKey)
      .then(response => {
        this.setState({ videoData: response.data })
        this.setState({ videoId: response.data[0].id })
        this.setState({ loading: false })
      })
      .then (()  => {
        axios
          .get(currentPlaying (this.state.videoId)) 
          .then(response => {
            console.log(response.data) //array of video information
            this.setState ({
              videoComments: response.data.comments,
              videoInfo: response.data,
              videoThumbnail: response.data.image,
              loopingVideo: response.data.video + myKey
            })
            console.log(response.data.image)
          })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      axios
      .get(currentPlaying(this.props.match.params.id))
        .then(response => {
          // console.log(this.props.match.params.id)
          this.setState({
            videoComments: response.data.comments,
            videoInfo: response.data,
            videoThumbnail: response.data.image,
            loopingVideo: response.data.video + myKey
          })
        })
    }
  }

  render() {
    if (this.state.loading) return <h3>Loading Brainflix...</h3>
    return (
     <div>
       <Header /> 
      <Currentvideo videoThumbnail={this.state.videoThumbnail} loopingVideo={this.state.loopingVideo} />
      <section className="desktop-flex">
          <div className="container-1">
            <Videotitle videoInfo={this.state.videoInfo}/>
            <FormComments />
            <Comments videoComments={this.state.videoComments} />
          </div>
      
          <div className="container-2">
            <Videos videoData={this.state.videoData} videoInfo={this.state.videoInfo}   />
          </div>
      </section>
      </div>
    )
  }
}

  export default Homepage;
