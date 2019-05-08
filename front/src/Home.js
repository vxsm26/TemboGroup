import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import {
  NavLink
} from "react-router-dom";
 
class Home extends Component {
  render() {
    return (
        <div>
            <div className="content">
              <ul className="homeMenu">
                <li><NavLink to="/strategyManagement">STRATEGY MANAGEMENT</NavLink></li><br/>
                <li><NavLink to="/organizationalDesign">ORGANITATION DESIGN</NavLink></li><br/>
                <li><NavLink to="/corporateCitizenship">CORPORATE CITIZENSHIP</NavLink></li><br/>
                <li><NavLink to="/partnership">PARTNERSHIP + COALITIONS</NavLink></li><br/>
                <li><NavLink to="/movement">MOVEMENT MAKING</NavLink></li><br/>
                <li><NavLink to="/content">CONTENT + THOUGHT LEADERSHIP</NavLink></li>
              </ul>
            </div>
            <div className="content">
              <img src={imgRight} className="imgHome" alt="imhHome"/>
            </div>
        </div>
    );
  }
}
 
export default Home;
