import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';
import user from '../assets/Mohan-muruge.jpg';


class Header extends React.Component {
  render() {
    return (
      <header>
      <div className="logo"> 
          <img src={logo} alt="website logo"></img>
      </div>
      <input type="text" name="searchbox" placeholder="Search" className="search-box" />
    
        <div className="uploadWrapper">
        <button>+ UPLOAD</button>
          <img className="rounded-image" src={user} alt="a person"></img>
      </div>
      </header>
    )
  }
}

export default Header

