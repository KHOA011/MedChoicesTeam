import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate(); 
    const handleBack = () => {
        navigate(-1);
      };
  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button">
          <i className="fas fa-palette"></i>
          <span>
          <Link to="/homepage" className="survey-button">Home</Link>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-images"></i>
          <span>
          <Link to="/fact" className="survey-button">Do you know ?</Link>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-images"></i>
          <span>
          <Link to="/faqs" className="survey-button">FAQs</Link>
          </span>
        </div>
        <div className="nav-button">
          <i className="fas fa-images"></i>
          <span>
          <Link to="/about-us" className="survey-button">About us</Link>
          </span>
        </div>
        <hr />
        <div id="nav-content-highlight"></div>
        <div className="button-spacing">
        <button onClick={handleBack} className="go-back-link">Back</button>
      </div> 
      </div>
    </div>
  );
};

export default Sidebar;
