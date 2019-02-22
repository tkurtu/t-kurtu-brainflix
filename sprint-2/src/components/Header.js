import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';
import user from '../assets/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header> 
        <div className="logo"> 
        <Link to="/">
            <img src={logo} alt="website logo"></img>
        </Link>
        </div>
        <input type="text" name="searchbox" placeholder="Search" className="search-box" />
          <div className="uploadWrapper">
          <button>
          <Link to="/upload">+UPLOAD</Link> 
          </button>
            <img className="rounded-image" src={user} alt="a person"></img>
          </div>
  

      
      </header>
    )
  }
}

export default Header

//* <div>
//* <Link to="/upload">Click to Upload!</Link> ||
//<Link to="/">Brainflix Home</Link>
//</div> 

//<button>+ UPLOAD</button>