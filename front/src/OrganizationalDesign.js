import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import {
  NavLink
} from "react-router-dom";

class OrganizationalDesing extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="sectionTitle">
            Organizational Desing
          </div>
          <div className="sectionContent">
            We design, repair and restructure organizations and programs to support and maximize their social impact. We build foundations, non-profits and corporate sustainability programs from the ground up. We create structure where little exists - taking fragmented efforts, and bringing focus, rigor, strategy and structure so organizations can be more efficient with their resources. We realign incentives and create institutional mechanisms to foster greater collaboration.<br/>
            Services include:
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
        <div className="content">
          <img src={imgRight} className="imgHome" alt="imgContent"/>
        </div>
      </div>
    );
  }
}

export default OrganizationalDesing;
