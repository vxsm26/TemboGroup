import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./About";
import BrainTrust from "./BrainTrust";
import Careers from "./Careers";
import Contact from "./Contact";
import Content from "./Content";
import CorporateCitizenship from "./CorporateCitizenship";
import Home from "./Home";
import Movement from "./Movement";
import OrganizationalDesign from "./OrganizationalDesign";
import Partenship from "./Partnership";
import StrategyManagement from "./StrategyManagement";
import imgLogo from "./img/temboGroupLogo.png";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="divHeaderContainer">
            <div className="divHeader">
              <img src={imgLogo} className="imgLogo" alt="imgLogo"/>
            </div>
            <div className="divHeader rightHeader">
              <ul className="header">
                <li className="borderRight"><NavLink to="/">SERVICES</NavLink></li>
                <li className="borderRight"><NavLink to="/brainTrust">BRAIN TRUST</NavLink></li>
                <li className="borderRight"><NavLink to="/careers">CAREERS</NavLink></li>
                <li className="borderRight"><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
              </ul>
            </div>
          </div>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/brainTrust" component={BrainTrust}/>
            <Route path="/careers" component={Careers}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/content" component={Content}/>
            <Route path="/corporateCitizenship" component={CorporateCitizenship}/>
            <Route path="/movement" component={Movement}/>
            <Route path="/organizationalDesign" component={OrganizationalDesign}/>
            <Route path="/partnership" component={Partenship}/>
            <Route path="/strategyManagement" component={StrategyManagement}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
