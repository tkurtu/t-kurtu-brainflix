import React from 'react';
// import playButton from '../assets/Icons/SVG/Icon-play.svg';
// import fullScreen from '../assets/Icons/SVG/Icon-fullscreen.svg';
// import volume from '../assets/Icons/SVG/Icon-volume.svg';



class Currentvideo extends React.Component {
  
  componentDidUpdate () {
    this.video.load()  
  }

  render() {
    return (
      <section>
      <div className="video-container" >
        <video ref={self => {this.video=self}} className="currentvideo" controls poster={this.props.videoThumbnail} src={this.props.loopingVideo}></video>
      </div>
      </section>
    )
  }
}

export default Currentvideo
