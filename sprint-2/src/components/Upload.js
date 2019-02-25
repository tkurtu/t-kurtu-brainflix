import React from 'react';
import upload from '../assets/upload-video.jpg'
// import { Link,  } from 'react-router-dom';



class Upload extends React.Component {
  render () {
    return (
    <section className='upload-body' >
      <h1 className='upload-title'>Upload Video</h1>
      <div className='grey-border'>
      <section className='upload-desktop'>
        <div>
          <h3 className="upload-subtitle">VIDEO THUMBNAIL</h3> 
          <img src={upload} className="upload-image" alt=" " /> 
      </div>
      <div className="form-width">
          <form className="upload-form"> 
          <div className="upload-subtitle">TITLE YOUR VIDEO</div> 
            <input type="text" placeholder="Add a title to your video" className="upload-form1"/>
            <div className="upload-subtitle">ADD A VIDEO DESCRIPTION</div> 
            <input type="text" placeholder="Add a description to your video" className="upload-form2"/>
            </form>
      </div>  
      </section>
      </div> 
      <div className="upload-buttons">
        <button className="comments__button">PUBLISH</button>
        <div className="comments__cancel">CANCEL</div>
      </div>

    </section>
    )
  }
}

export default Upload



//NOTES: give style names more meaning for readability 
