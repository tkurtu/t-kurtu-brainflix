import React from 'react';


class Currentvideo extends React.Component {
  render() {
    return (
      <section>
      <div className="video-container" >
        <video controls className="currentvideo" poster={this.props.videoThumbnail} src={this.props.loopingVideo}>
        </video>
      </div>
      </section>
    )
  }
}

export default Currentvideo
