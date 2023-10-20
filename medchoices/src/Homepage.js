import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
  const location = useLocation();
  const { nuid, fullName } = location.state || { nuid: '', fullName: '' };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="frame">
      <div className="sidebar">
        <Link to="/homepage" className="sidebar-link">
          Home
        </Link>
        <Link to="/do-you-know" className="sidebar-link">
          Do You Know
        </Link>
        <Link to="/faqs" className="sidebar-link">
          FAQs
        </Link>
      </div>
      <div className="content">
        <h1>Welcome to the Homepage</h1>
        <p>NUID: {nuid}</p>
        <p>Full Name: {fullName}</p>
        <div className="button-spacing">
          <h2>Choose a Survey:</h2>
          <Link to="/survey/depression" className="survey-button">
            <button>Depression</button>
          </Link>
          <Link to="/survey/bipolar" className="survey-button">
            <button>Bipolar</button>
          </Link>
          <Link to="/survey/anxiety" className="survey-button">
            <button>Anxiety</button>
          </Link>
        </div>
        <div className="button-spacing">
          <button onClick={handleBack} className="go-back-link">Back</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
