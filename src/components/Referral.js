// Referral.js

import React, { Component } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

class Referral extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      partyName: "",
      passcode: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    console.log("clicked");

    let serviceId = "gmail";
    let templateId = "what_s_for_dinner";
    let userId = "user_jxOHmKi4dp7HO6sDxJ6Fb";
    let templateParams = {
      email: this.state.email,
      party: this.state.partyName,
      passcode: this.state.passcode,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          title: "Thanks for referring a friend!!!",
          type: "success",
          confirmButtonColor: "#00F6FF",
        });
      },
      (err) => {
        console.log("FAILED...", err);
        Swal.fire({
          title: "You entered an invalid e-mail address, please try again!",
          type: "error",
          text: err.message,
          confirmButtonColor: "#00F6FF",
        });
      }
    );
  };

  render() {
    return (
      <form className="refForm">
        <label htmlFor="email">Refer a Friend to Join</label>
        <input
          type="email"
          onChange={this.handleChange}
          value={this.state.email}
          name="email"
        />
        <button className="btn refBtn" onClick={this.handleClick}>
          send email
        </button>
        <label htmlFor="partyName">Party Name</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.partyName}
          name="partyName"
        />
        <label htmlFor="passcode">Passcode</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.passcode}
          name="passcode"
        />
        <button onClick={this.handleClick}>send email</button>
        <button className="btn refBtn" onClick={this.handleClick}>
          send email
        </button>
      </form>
    );
  }
}

export default Referral;
