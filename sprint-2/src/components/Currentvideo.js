import React from 'react';
// import nowplaying from '../assets/video-list-0.jpg'

class Currentvideo extends React.Component {
  render() {
    return (
      <section>
      <div className="video-container" >
        <video controls className="currentvideo" poster={this.props.videoThumbnail}>
        </video>
      </div>
    
      </section>
    )
  }
}

export default Currentvideo


//add a state HEREEE
// poster={this.props.videoId} 