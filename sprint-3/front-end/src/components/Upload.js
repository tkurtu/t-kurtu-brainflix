import React from 'react';
import upload from '../assets/upload-video.jpg';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const newApi = `http://localhost:8080/videos`


class Upload extends React.Component {

  uploadVideo = (event) => {
    event.preventDefault();
    // const title = event.target.title.value;
    // const description = event.target.description.value;
    // console.log(title)
    // console.log(description)
    axios
    .post(newApi, {
      title: event.target.title.value,
      description: event.target.description.value,
    })
    .then(response => {
      console.log("Uploaded!");
    })
  }


  render () {
    return (
      <div>
       <Header /> 
        <section className='upload-body' >
          <h1 className='upload-title'>Upload Video</h1>
          <div className='grey-border'>
            <section className='upload-desktop'>
              <div>
                <h3 className="upload-subtitle">VIDEO THUMBNAIL</h3> 
                <img src={upload} className="upload-image" alt=" " /> 
              </div>
              <div className="form-width">
                <form className="upload-form" onSubmit={this.uploadVideo} > 
                  <label className="upload-subtitle">TITLE YOUR VIDEO</label>
                  <input 
                  type="text" 
                  placeholder="Add a title to your video" 
                  id="title" 
                  className="upload-form1" 
                  name="title"
                  />

                  <label className="upload-subtitle">ADD A VIDEO DESCRIPTION</label>
                  <input 
                  type="text" 
                  placeholder="Add a description to your video" 
                  id="description"
                  className="upload-form2" 
                  name="description"
                  />
                  <button onClick={this.publishVid}>PUBLISH</button>
                  <Link to="/"> 
                  <button onClick={this.cancelVid}>CANCEL</button>
                  </Link>
                </form>
              </div>  
            </section>
          </div> 
        </section>
      </div>
    )
  }
}

export default Upload


  // constructor() {
  //   super()
  //   this.state = {
  //     uploadTitle = '',
  //     uploadDetail = '',
  //   }
  // }

/* <div className="upload-buttons">
            <button className="comments__button">PUBLISH</button>
            <div className="comments__cancel">CANCEL</div>
          </div> */