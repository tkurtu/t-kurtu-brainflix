import React from 'react'
import Video from './Video'
import {Link} from 'react-router-dom';

class Videos extends React.Component {
  render() {
   let videoList = this.props.videoData.filter((video) => {
     return video.id !== this.props.videoInfo.id
   }).map((video, i) => {
     return <Link to={'/videos/' + video.id} >
     <Video 
     title={video.title} 
     channel={video.channel} 
     image={video.image} 
     key={i} />
       </Link>
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

