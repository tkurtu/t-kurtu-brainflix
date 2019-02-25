import React, { Component } from 'react';
import './styles/index.css';
import Homepage from './Homepage';
import Upload from './components/Upload';
import Header from './components/Header'
// import axios from 'axios';

import { Route, Switch } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} /> 
        <Route path="/homepage" component={Homepage} />
        <Route path="/upload" component={Upload} />
        <Route path="/videos/:id" component = {Homepage} />
      </Switch>
      </div>
    );
  }
}



export default App;

//   <Route path="/homepage" exact render={
//    () => <Homepage 
//       // videos={this.props.videos} 
//       // comments={this.props.comments} 
//     />
//  } /> 