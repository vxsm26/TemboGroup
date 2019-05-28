import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import imgLine from './img/dividerLine.png';
import imgBF1 from './img/butterfly1.png';

import {
  NavLink
} from "react-router-dom";
 
class StrategyManagement extends Component {
  render() {
    return (
      <div>
        <div className="content contentLeft">
          <div className="sectionTitle">
            <img src={imgBF1} className="butterflyMenu" alt="imgBF1"/>
            <span>Strategy Management</span>
          </div>
          <div className="sectionContent">
            We bring good ideas to life -- guiding them from concept through to execution, launch and impact. We design smart strategies that are grounded in the realities of an organization's capacity to execute them. We help clients navigate complex ecosystems surrounding various causes, and build the necessary networks, knowledge and credibility to operate and launch major initiatives. We identify solutions, codify best practices, develop blueprints to replicate success and help remove barriers to scale. Services include:
            <br/><br/>
            <ul>
              <li><b>organization &amp; program strategy</b></li>
              <li><b>innovation audit &amp; strategy</b></li>
              <li><b>replication &amp; scale strategy</b></li>
              <li><b>network mapping &amp; analysis</b></li>
              <li><b>workshop design &amp; facilitation</b></li>
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
 
export default StrategyManagement;
