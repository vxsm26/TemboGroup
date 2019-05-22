import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import {
  NavLink
} from "react-router-dom";

class Partnership extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="sectionTitle">
            Partnerships &amp; Coalitions
          </div>
          <div className="sectionContent">
            Solving the world’s most intractable societal ails cannot be done in isolation, and while partnerships used to be a novel idea, today they are an operational requirement. At Tembo, we built a proprietary system for analyzing, mapping, engaging and managing partnerships and coalition. For each of our clients, we ensure tour work is not duplicating efforts for optimal impact and return on investment.<br/>
            Services include:
            <br/><br/>
            <ul>
              <li><b>ecosystem mapping</b></li>
              <li><b>partnership strategy</b></li>
              <li><b>coalition building</b></li>
              <li><b>matchmaking</b></li>
              <li><b>structure &amp; management</b></li>
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

export default Partnership;
