import React, { Component } from "react";
import imgRight from './img/picture-not-available.jpg';
import {
  NavLink
} from "react-router-dom";
 
class StrategyManagement extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="sectionTitle">
            Strategy &amp; Management
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
        <div className="content">
          <img src={imgRight} className="imgHome" alt="imgContent"/>
        </div>
      </div>
    );
  }
}
 
export default StrategyManagement;
