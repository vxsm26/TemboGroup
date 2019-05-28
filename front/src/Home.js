import React, { Component } from "react";
import imgLine from './img/dividerLine.png';
import imgBF1 from './img/butterfly1.png';
import imgBF2 from './img/butterfly2.png';
import imgBF3 from './img/butterfly3.png';
import imgBF4 from './img/butterfly4.png';
import imgBF5 from './img/butterfly5.png';
import imgBF6 from './img/butterfly6.png';
import imgRightServices from './img/WomanPlant.png';

import {
  NavLink
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div>
            <div className="content contentLeft">
              <ul className="homeMenu">
                <li className="liHomeMenu">
                  <div>
                    <NavLink to="/strategyManagement">
                      <img src={imgBF1} className="butterflyMenu" alt="imgBF1"/>
                      <span>Strategy Management</span>
                    </NavLink>
                  </div>
                </li>
                <li className="liHomeMenu">
                  <NavLink to="/organizationalDesign">
                    <img src={imgBF2} className="butterflyMenu" alt="imgBF2"/>
                    <span>Organizational Design</span>
                  </NavLink>
                </li>
                <li className="liHomeMenu">
                  <NavLink to="/corporateCitizenship">
                    <img src={imgBF3} className="butterflyMenu" alt="imgBF3"/>
                    <span>Corporate Citizenship</span>
                  </NavLink>
                </li>
                <li className="liHomeMenu">
                  <NavLink to="/partnership">
                    <img src={imgBF4} className="butterflyMenu" alt="imgBF4"/>
                    <span>Partnerships &amp; Coalitions</span>
                  </NavLink>
                </li>
                <li className="liHomeMenu">
                  <NavLink to="/movement">
                    <img src={imgBF5} className="butterflyMenu" alt="imgBF5"/>
                    <span>Movement Making</span>
                  </NavLink>
                </li>
                <li className="liHomeMenu">
                  <NavLink to="/content">
                    <img src={imgBF6} className="butterflyMenu" alt="imgBF6"/>
                    <span>Content &amp; Thought Leadership</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="divider">
              <img src={imgLine} alt="imgLine"/>
            </div>
            <div className="content contentRight">
              <img src={imgRightServices} className="imgRight" alt="imgServices"/>
            </div>
        </div>
    );
  }
}

export default Home;
