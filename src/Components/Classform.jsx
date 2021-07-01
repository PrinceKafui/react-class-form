import React, { Component } from "react";
import "./Classform.css";

class Classform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textvalue: " ",
      emailvalue: " ",
      passwordvalue: " ",
      phonenumbervalue: " ",
    };
  }

  inputChange = (event) => {
    this.setState({ textvalue: event.target.value });
  };

  emailChange = (event) => {
    this.setState({ emailvalue: event.target.value });
  };

  passwordChange = (event) => {
    this.setState({ passwordvalue: event.target.value });
  };

  phonenumberChange = (event) => {
    this.setState({ phonenumbervalue: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state.textvalue);
    console.log(this.state.emailvalue);
    console.log(this.state.phonenumbervalue);
    console.log(this.state.passwordvalue);

    event.preventDefault();
  };

  render() {
    return (
      <form className="classform-section" onSubmit={this.handleSubmit}>
        <h1>CLASS COMPONENT FORM</h1>

        <label htmlFor="name" className="heading">
          Enter First Name:
        </label>
        <input
          type="text"
          value={this.state.textvalue}
          placeholder="First Name"
          onChange={this.inputChange}
          name="name"
        />
        <br />

        <label htmlFor="email" className="heading">
          Enter Email:
        </label>
        <input
          type="email"
          value={this.state.emailvalue}
          placeholder="Email"
          onChange={this.emailChange}
          name="email"
        />

        <br />
        <label htmlFor="password" className="heading">
          Enter Password:
        </label>
        <input
          type="password"
          value={this.state.passwordvalue}
          placeholder="Password"
          onChange={this.passwordChange}
          name="password"
          className="password"
        />

        <br />

        <label htmlFor="phone number" className="phone Number">
          Enter Phone Number:
        </label>
        <input
          type="phone number"
          value={this.state.phonenumbervalue}
          placeholder="Phone Number"
          onChange={this.phonenumberChange}
          name="phone number"
          className="phone number"
        />

        <br />

        <label htmlFor="gender" className="Gender">
          Gender:
        </label>

        <select
          name="gender"
          value={this.state.gender}
          onChange={this.handleChange}
        >
          <option value="select">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <br />
        <input type="submit" className="submit-btn" />
      </form>
    );
  }
}

export default Classform;
