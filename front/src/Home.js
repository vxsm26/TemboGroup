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
                <li><NavLink to="/strategyManagement">Strategy Management</NavLink></li><br/>
                <li><NavLink to="/organizationalDesign">Organizational Design</NavLink></li><br/>
                <li><NavLink to="/corporateCitizenship">Corporate Citizenship</NavLink></li><br/>
                <li><NavLink to="/partnership">Partnerships &amp; Coalitions</NavLink></li><br/>
                <li><NavLink to="/movement">Movement Making</NavLink></li><br/>
                <li><NavLink to="/content">Content &amp; Thought Leadership</NavLink></li>
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
