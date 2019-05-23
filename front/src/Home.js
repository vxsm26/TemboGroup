import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
//import imgLine from './img/verticalLine.png';

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
                <li><NavLink to="/partnership">PARTNERSHIP &amp; COALITIONS</NavLink></li><br/>
                <li><NavLink to="/movement">MOVEMENT MAKING</NavLink></li><br/>
                <li><NavLink to="/content">CONTENT &amp; THOUGHT LEADERSHIP</NavLink></li>
              </ul>
            </div>
            <div className="divider">

            </div>
            <div className="content">
              <img src={imgRight} className="imgHome" alt="imgHome"/>
            </div>
        </div>
    );
  }
}

export default Home;
