import React from 'react';
// import Header from './components/Header';
import upload from './assets/upload-video.jpg'
import Header from './components/Header';
// import { Link,  } from 'react-router-dom';



class Upload extends React.Component {
  render () {
    return (
    <section >
       <Header />
      <h1>Upload Video</h1>
        <h3 className="comments__title">Video Thumbnail</h3> 
        <img src={upload} className="currentvideo" alt=" " /> 

      <div className="form-width">
          <span className="comments__title">TITLE YOUR VIDEO</span> 
          <form className="tablet-form"> 
            <input type="text" name ="comments-form" placeholder="Add a title to your video" className="comments__upload"/>

            <input type="text" name ="comments-form" placeholder="Add a description to your video" className="comments__form"/>
            <button className="comments__button">PUBLISH</button>
        </form>
      </div>   

    </section>
    )
  }
}

export default Upload



//NOTES: give style names more meaning for readability 
