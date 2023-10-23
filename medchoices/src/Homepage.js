import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from './image/hp.PNG';

const Homepage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const name = 'John Doe'; // Replace with the actual name
  // const NUID = '12345678'; // Replace with the actual NUID
  const { fullName, nuid } = location.state || {};
  const handleSurveyClick = (surveyType) => {
    navigate(`/survey/${surveyType}`, { state: { fullName, nuid} });
  };
  if (fullName && nuid) {
    // Both name and NUID have values
    console.log('Name:', fullName);
    console.log('NUID:', nuid);
  } else {
    // Either name or NUID (or both) are undefined or empty
    console.log('Name and/or NUID are not defined or empty.');
  }
  

  return (
    <div className="homepage-container">
      <img src={logo} alt="" className="full-width-logo" />
      <div>
        <Sidebar />
        <div className="mh">
          <h1>Physical Heath Survey</h1>
          <ol>
            <li>
              <button onClick={() => handleSurveyClick('dental')}>Dental</button>
            </li>
            <li>
              <button onClick={() => handleSurveyClick('headache')}>Headache</button>
            </li>
            <li>
              <button onClick={() => handleSurveyClick('numbness')}>Numbness</button>
            </li>
          </ol>
        </div>
        <hr className="survey-divider" />
        <div className="mh">
          <h1>Mental Health Survey</h1>
          <ol>
            <li>
              <button onClick={() => handleSurveyClick('anxiety')}>Anxiety</button>
            </li>
            <li>
              <button onClick={() => handleSurveyClick('bipolar')}>Bipolar</button>
            </li>
            <li>
              <button onClick={() => handleSurveyClick('depression')}>Depression</button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

