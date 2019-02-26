import React from 'react';
import Videos from './components/Videos';
import Currentvideo from './components/Currentvideo';
import Videotitle from './components/Videotitle';
import FormComments from './components/FormComments';
import Comments from './components/Comments';
// import Header from './Header';
import axios from 'axios';


const videoUrl = 'https://project-2-api.herokuapp.com/videos/'
const myKey = '?api_key=c38ea111-7d11-400d-a33b-ab86b765b9b6'
const currentPlaying = id => `http://project-2-api.herokuapp.com/videos/${id}${myKey}`



class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {
      videoData: [], //list of side videos
      videoInfo: [],//titles, likes, views
      videoComments: [], //comments 
      videoThumbnail: [], //video photo 
      videoId: '', //id of videos
    }
  }
 
  componentDidMount() {
    axios.get(videoUrl + myKey)
      .then(response => {
        this.setState({ videoData: response.data })
        this.setState({ videoId: response.data[0].id })
      })
      .then (()  => {
        axios
          .get(currentPlaying (this.state.videoId)) 
          .then(response => {
            console.log(response.data) //prints out the array of id, comments, description etc
            this.setState ({
              videoComments: response.data.comments,
              videoInfo: response.data,
              videoThumbnail: response.data.image
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
            videoThumbnail: response.data.image
          })
        })
    }
  }

  

  render() {
    return (
     <div>
      <Currentvideo videoThumbnail={this.state.videoThumbnail}/>
      <section className="desktop-flex">
          <div className="container-1">
            <Videotitle videoInfo={this.state.videoInfo}/>
            <FormComments />
            <Comments videoComments={this.state.videoComments} />
          </div>
      
          <div className="container-2">
            <Videos videoData={this.state.videoData}  />
          </div>
      </section>
      </div>
    )
  }
}


  export default Homepage;
