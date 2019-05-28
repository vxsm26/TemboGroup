import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';
import imgBF3 from './img/butterfly3.png';

import {
  NavLink
} from "react-router-dom";
 
class CorporateCitizenship extends Component {
  render() {
    return (
      <div>
        <div className="content contentLeft">
          <div className="sectionTitle">
            <img src={imgBF3} className="butterflyMenu" alt="imgBF3"/>
            <span>Corporate Citizenship</span>
          </div>
          <div className="sectionContent">
            The Scale of challenges humanity faces requires collective action, and often radical shifts in culture and behavior. Instigating this change means sparking real movements, which can be intentionally built, but must be collectively adopted. It means building narratives that permeate popular media, tied to specific policy and behavior changes. We work with clients to design, build anc catalyze movements. Services include:
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
 
export default CorporateCitizenship;
