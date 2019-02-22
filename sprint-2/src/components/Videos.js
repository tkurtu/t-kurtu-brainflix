//videos!! plural! map here
import React from 'react'
import Video from './Video'

class Videos extends React.Component {
  render() {
    const videoList = this.props.videoData.map((video, i) => {
      return <Video title={video.title} channel={video.channel} image={video.image} key={i} /> 
    })

    return (
      <div className="column-videos">
          <h4>NEXT VIDEO</h4>
        {videoList}
      </div>
    )
  }
}

export default Videos