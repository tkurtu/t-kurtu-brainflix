import React from 'react';
import Videos from './Videos';
import Currentvideo from './Currentvideo';
import Videotitle from './Videotitle';
import FormComments from './FormComments';
import Comments from './Comments';
// import Header from './Header';
import axios from 'axios';


const videoUrl = 'https://project-2-api.herokuapp.com/videos?api_key=c38ea111-7d11-400d-a33b-ab86b765b9b6'





class Homepage extends React.Component {
  state = {
    videoData: [],
    videoId: null
   }

    componentDidMount () {
      axios
        .get(videoUrl)
        .then(response => {
          // console.log(response.data[0].id)
          this.setState ({
          videoData: response.data  
        })
      //  .then(( {videoId}) => {
      //   axios.get(videoUrl)
      //  })
     
    })    
  }

  //  componentDidUpdate () {
  //  }

  render() {
    // console.log(this.props.comments)
    return (
     <div>
      <Currentvideo />
      <section className="desktop-flex">
          <div className="container-1">
            <Videotitle />
            <FormComments />
            <Comments comments={this.props.comments} />
          </div>
      
          <div className="container-2">
            <Videos videoData={this.state.videoData} />
          </div>
      </section>
      </div>
    )
  }
}


  export default Homepage;


  // const videoId = (id) = `https://project-2-api.herokuapp.com/videos/${id}?api_key=c38ea111-7d11-400d-a33b-ab86b765b9b6`
// const { id } = response.data[0].id