import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import {
  NavLink
} from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="sectionTitle">
            Content &amp; Thought Leadership
          </div>
          <div className="sectionContent">
            Leading in the 21st century requires that we catalyze conversations, shape debates, and create the frames though which people digest information. At Tembo, we work closely with clients to articulate their points of view, and translate their perspectives into influential content, and distribute that content across the most relevantchannels.<br/>
            Services include:
            <br/><br/>
            <ul>
              <li><b>content, theme &amp; platform strategy</b></li>
              <li><b>content creation &amp; distribution,</b> including bespoke publications &amp; platforms</li>
              <li><b>executive positioning,</b> including event strategy, speechwriting, digital personas &amp; media/presentation training</li>
              <li><b>knowledge &amp; research</b></li>
              <li><b>reputation risk management</b></li>
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

export default Content;
