import React, { useState } from 'react';
import logo from './image/logo.PNG';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({
    nuid: '',
    fullName: '',
    agreeTerms: false,
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setState({ ...state, [name]: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation for NUID (8 digits)
    if (!/^\d{8}$/.test(state.nuid)) {
      alert('Please enter a valid 8-digit NUID.');
      return;
    }

    // Validation for Full Name (less than 30 characters)
    if (state.fullName.length >= 30) {
      alert('Full Name must be less than 30 characters.');
      return;
    }

    // Validate the "Agree to Terms" checkbox
    if (!state.agreeTerms) {
      alert('Please agree to the terms before registering.');
      return;
    }

    // After handling the registration and validation, navigate to the homepage
    navigate('/homepage', { state: { nuid: state.nuid, fullName: state.fullName } });

  };

  return (
    <div className="registration-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="registration-form">
        <h2 style={{ color: '#00a2ff' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="nuid" style={{ color: '#00a2ff' }}>NUID:</label>
            <input
              type="text"
              id="nuid"
              name="nuid"
              value={state.nuid}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="fullName" style={{ color: '#00a2ff' }}>Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={state.fullName}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ color: '#00a2ff' }}>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={state.agreeTerms}
                onChange={handleCheckboxChange}
              />
              I agree with all terms and conditions
            </label>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ color: '#00a2ff' }}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={state.rememberMe}
                onChange={handleCheckboxChange}
              />
              Remember me
            </label>
          </div>
          <div className="centered-button">
            <button type="submit" style={{ color: '#00a2ff', marginRight: '32px' }}>Register</button>
            <Link to="/about-us" style={{ textDecoration: 'none' }}>
              <button style={{ color: '#00a2ff' }}>About Us</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


