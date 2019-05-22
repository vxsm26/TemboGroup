import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="formContainer">
        <div className="formLines">
          Name:
        </div>
        <div className="formLines">
          <input type="text" name="inputName"></input>
        </div>
        <div className="formLines">
          Email Address:
        </div>
        <div className="formLines">
          <input type="text" name="inputEmail"></input>
        </div>
        <div className="formLines">
          Subject:
        </div>
        <div className="formLines">
          <input type="text" name="inputSubject"></input>
        </div>
        <div className="formLines">
          Message:
        </div>
        <div>
          <textarea rows="5"></textarea>
        </div>
        <div align="center" className="sectionBack">
          <span className="textBack">SEND</span>
        </div>
      </div>
    );
  }
}

export default Contact;
