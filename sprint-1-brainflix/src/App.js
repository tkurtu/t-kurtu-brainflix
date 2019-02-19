import React, { Component } from 'react';
import './styles/index.css';
import Header from './components/Header';
import Videos from './components/Videos';
import Currentvideo from './components/Currentvideo';
import Videotitle from './components/Videotitle';
import FormComments from './components/FormComments';
import Comments from './components/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Currentvideo />
          <section className="desktop-flex">
              <div className="container-1">
                <Videotitle />
                <FormComments />
                <Comments comments={this.props.comments} />
              </div>
          
              <div className="container-2">
                <Videos videos={this.props.videos} />
              </div>
          </section>
      </div>
    );
  }
}



export default App;
