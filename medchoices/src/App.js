import React, { Component } from 'react';
import './App.css';
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
          <h2 style={{ color: '#00a2ff' }}>Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="nuid" style={{ color: '#00a2ff' }}>NUID:</label>
              <input
                type="text"
                id="nuid"
                name="nuid"
                value={this.state.nuid}
                onChange={this.handleInputChange}
                style={{ width: '100%' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullName" style={{ color: '#00a2ff' }}>Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleInputChange}
                style={{ width: '100%' }}
              />
            </div>
            <div className="form-group">
              <label style={{ color: '#00a2ff' }}>
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
              <label style={{ color: '#00a2ff' }}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={this.state.rememberMe}
                  onChange={this.handleCheckboxChange}
                />
                Remember me
              </label>
            </div>
            <div className="centered-button">
              <button type="submit" style={{ color: '#00a2ff', marginRight: '32px' }}>Register</button>
              <a className="about-us-link" href="/about-us" style={{ color: '#00a2ff' }}>About Us</a>
            </div>
          </form>
          <div className="button-spacing" style={{ marginTop: '30px' }}>
            <span style={{ color: '#00a2ff', display: 'block' }}>
              Already have an account? <a href="/login" style={{ textDecoration: 'underline' }}>Login here</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
