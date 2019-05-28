import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';
import imgBF2 from './img/butterfly2.png';

import {
  NavLink
} from "react-router-dom";
 
class OrganizationalDesing extends Component {
  render() {
    return (
      <div>
        <div className="content contentLeft">
          <div className="sectionTitle">
            <img src={imgBF2} className="butterflyMenu" alt="imgBF2"/>
            <span>Organizational Design</span>
          </div>
          <div className="sectionContent">
            We design, repair and restructure organizations and programs to support and maximize their social impact. We build foundations, non-profits and corporate sustainability programs from the ground up. We create structure where little exists — taking fragmented efforts, and bringing focus, rigor, strategy and structure so organizations can be more efficient with their resources. We realign incentives and create institutional mechanisms to foster greater collaboration. Services include:
            <br/><br/>
            <ul>
              <li><b>organizational design, strategy &amp; launch</b></li>
              <li><b>foundation &amp; non-profit start-up</b></li>
              <li><b>vision, mission &amp; brand identity</b></li>
              <li><b>reputation risk management</b></li>
              <li><b>knowledge management</b></li>
            </ul>
          </div>
          <div align="center" className="sectionBack">
            <span className="textBack"><NavLink to="/">BACK</NavLink></span>
          </div>
        </div>
        <div className="divider">
          <img src={imgLine} alt="imgLine"/>
        </div>
        <div className="content contentRight">
          <img src={imgRight} className="imgRight" alt="imgContent"/>
        </div>
      </div>
    );
  }
}
 
export default OrganizationalDesing;
