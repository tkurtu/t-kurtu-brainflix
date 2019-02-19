//videos!! plural! map here
import React from 'react'
import Video from './Video'

class Videos extends React.Component {
  render() {
    const videoList = this.props.videos.map(video => {
      return <Video title={video.title} author={video.author} src={video.imgSrc}  /> 
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