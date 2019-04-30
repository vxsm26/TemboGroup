import React from 'react';
import './App.css';
import imgRight from './img/picture-not-available.jpg';

function App() {
  return (
    <div>
      <div>
        <div className="headerMenu"><h1>TEMBO GROUP</h1></div>
        <div className="headerMenu">
          <button className="btnMenu">HOME</button>
          <button className="btnMenu">BRAIN TRUST</button>
          <button className="btnMenu">CAREERS</button>
          <button className="btnMenu">ABOUT</button>
          <button className="btnMenu">CONTACT</button>
        </div>
      </div>
      <div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="content">
          <img src={imgRight} className="imgServices"/>
        </div>
      </div>
    </div>
  );
}

export default App;
