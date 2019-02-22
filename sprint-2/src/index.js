import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import videos from './components/Videoslist';
import comments from './components/Commentslist';
import { BrowserRouter} from 'react-router-dom';


ReactDOM.render(

<BrowserRouter> 
  < App videos={videos} comments={comments} /> 
</BrowserRouter>



, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


//make sure home page ad url is in same homepage