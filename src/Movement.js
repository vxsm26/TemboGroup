import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
 
class Movement extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="sectionTitle">
            MOVEMENT MAKING
          </div>
          <div className="sectionContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div align="center" className="sectionBack">
            <NavLink to="/">BACK</NavLink>
          </div>
        </div>
        <div className="content">
          <img src={imgRight} className="imgHome"/>
        </div>
      </div>
    );
  }
}
 
export default Movement;
