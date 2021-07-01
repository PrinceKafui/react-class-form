import React, { Component } from "react";
import "./Classform.css";

class Classform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textvalue: " ",
      firstnamevalue: "",
      surnamevalue: "",
      emailvalue: " ",
      passwordvalue: " ",
      phonenumbervalue: " ",
      gendervalue: " ",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    this.setState({
      firstname: "",
      surname: "",
      email: "",
      password: "",
      phonenumber: "",
      gender: "male",
    });
  };

  render() {
    return (
      <form className="classform-section" onSubmit={this.handleSubmit}>
        <h1>CLASS COMPONENT FORM</h1>

        <label htmlFor="name" className="firstname">
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

        <label htmlFor="name" className="surname">
          Enter Surname:
        </label>
        <input
          type="text"
          value={this.state.textvalue}
          placeholder="Surname"
          onChange={this.inputChange}
          name="name"
        />

        <br />

        <label htmlFor="email" className="email">
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

        <label htmlFor="password" className="password">
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

        <label htmlFor="phonenumber" className="phoneNumber">
          Enter Phone Number:
        </label>
        <input
          type="phone number"
          value={this.state.phonenumbervalue}
          placeholder="PhoneNumber"
          onChange={this.phonenumberChange}
          name="phone number"
          className="phonenumber"
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
