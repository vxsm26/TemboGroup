import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';

import {
  NavLink
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div>
            <div className="content">
              <ul className="homeMenu">
                <li className="liHomeMenu"><NavLink to="/strategyManagement">Strategy Management</NavLink></li>
                <li className="liHomeMenu"><NavLink to="/organizationalDesign">Organizational Design</NavLink></li>
                <li className="liHomeMenu"><NavLink to="/corporateCitizenship">Corporate Citizenship</NavLink></li>
                <li className="liHomeMenu"><NavLink to="/partnership">Partnerships &amp; Coalitions</NavLink></li>
                <li className="liHomeMenu"><NavLink to="/movement">Movement Making</NavLink></li>
                <li className="liHomeMenu"><NavLink to="/content">Content &amp; Thought Leadership</NavLink></li>
              </ul>
            </div>
            <div className="divider">
              <img src={imgLine} alt="imgLine"/>
            </div>
            <div className="content">
              <img src={imgRight} className="imgHome" alt="imgHome"/>
            </div>
        </div>
    );
  }
}

export default Home;
