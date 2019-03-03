import React from 'react';

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
