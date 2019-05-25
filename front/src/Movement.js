import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import {
  NavLink
} from "react-router-dom";
 
class Movement extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="sectionTitle">
            Movement Making
          </div>
          <div className="sectionContent">
            The scale of challenges humanity faces requires collective action, and often radical shifts in culture and behaviors. Instigating this change means sparking real movements, which can be intentionally built, but must be collectively adopted. It means building narratives that permeate popular media, tied to specific policy and behavior changes. We work with clients to design, build and catalyze movements. Services include:
            <br/><br/>
            <ul>
              <li><b>campaign strategy, branding &amp; execution</b></li>
              <li><b>transmedia storytelling &amp; messaging</b></li>
              <li><b>public affairs &amp; policy</b></li>
              <li><b>PR &amp; communications</b></li>
              <li><b>digital strategy</b></li>
              <li><b>art, design &amp; media</b></li>
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
 
export default Movement;
