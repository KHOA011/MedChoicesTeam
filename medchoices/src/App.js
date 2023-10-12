import React, { Component } from 'react';
import './App.css'; // Import the CSS file
import logo from './image/logo.PNG';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nuid: '',
      fullName: '',
      agreeTerms: false,
      rememberMe: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a server or perform client-side validation.
  };

  render() {
    return (
      <div className="registration-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="registration-form">
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="nuid">NUID:</label>
              <input
                type="text"
                id="nuid"
                name="nuid"
                value={this.state.nuid}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={this.state.agreeTerms}
                  onChange={this.handleCheckboxChange}
                />
                I agree with all terms and conditions
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={this.state.rememberMe}
                  onChange={this.handleCheckboxChange}
                />
                Remember me
              </label>
            </div>
            <button type="submit">Register</button>
          </form>
          <div className="buttons">
            <button className="login-button" onClick={() => window.location.href = "/login"}>Already have an account? Login here</button>
            <button className="about-us-button" onClick={() => window.location.href = "/about-us"}>About Us</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
