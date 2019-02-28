import React from 'react';
import playButton from '../assets/Icons/SVG/Icon-play.svg';
import fullScreen from '../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../assets/Icons/SVG/Icon-volume.svg';



class Currentvideo extends React.Component {
  render() {
    return (
      <section>
      <div className="video-container" >
        <video className="currentvideo" poster={this.props.videoThumbnail}></video>
      </div>
      <div>
        hello world
        <img src={playButton} alt=" "></img>
        <img src={fullScreen} alt=" "></img>
        <img src={volume} alt=" "></img>
      </div>

      </section>
    )
  }
}

export default Currentvideo


/* <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input> */

 /* <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input> */