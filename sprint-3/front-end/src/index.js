import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import videos from './components/Videoslist';
// import comments from './components/Commentslist';
import { BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter> 
    < App /> 

  </BrowserRouter>

, document.getElementById('root'));
serviceWorker.unregister();

// comments={comments}
// videos={videos}




