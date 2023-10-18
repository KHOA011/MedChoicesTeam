import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Summarypage = () => {
  const location = useLocation();
  const { userResponse, questions } = location.state || {};
  const navigate = useNavigate();

  if (!userResponse || !questions) {
    return (
      <div>
        <h1>Error: Missing Data</h1>
        <p>Sorry, there was an issue loading the summary data.</p>
      </div>
    );
  }
    // Calculate the average grade for numerical responses
    const numericalResponses = userResponse.surveyResponses.filter(
      (response) => typeof response === 'number'
    );
  
    const sum = numericalResponses.reduce((acc, value) => acc + value, 0);
    const averageGrade = sum / numericalResponses.length;

    const getHealthConditionMessage = (averageGrade) => {
      if (averageGrade < 3) {
        return 'Healthy Condition';
      } else if (averageGrade >= 3 && averageGrade < 5) {
        return 'Mild Health Problem';
      } else if (averageGrade >= 5 && averageGrade < 7) {
        return 'Moderate Health Problem';
      } else {
        return 'Severe Health Problem';
      }
    };
    const healthConditionMessage = getHealthConditionMessage(averageGrade);

    const questionAnswerStyle = {
      fontSize: '17px', // Set the font size to 14px or your preferred size
      paddingLeft: '20px', // Adjust the tab spacing
    };
    const sectionStyle = {
      color: 'white', // White text color
      padding: '20px', // Add some padding for spacing
    };

    
  return (
    <div className="survey-container">
<section style={sectionStyle} >
      <h1 >Summary Page</h1>
      <details>
        <summary>User Information</summary>
        <p>Age: {userResponse.age}</p>
        <p>Email: {userResponse.email}</p>
        <p>Phone Number: {userResponse.phone}</p>
      </details>

      <details>
        <summary>Evaluation</summary>
        <p>Average Grade: {averageGrade.toFixed(2)} ({healthConditionMessage})</p>        
      </details>

      <details>
        <summary>Questions and Answers</summary>
        <div style={questionAnswerStyle}>
          {questions.map((question, index) => (
            <details key={index}>
              <summary style={questionAnswerStyle}>{question}</summary>
              <p style={questionAnswerStyle}>Answer: {userResponse.surveyResponses[index]}</p>
            </details>
          ))}
        </div>
      </details>
      <button onClick={() => navigate('/')} className="submit-button">Confirm</button>
    </section>
    </div>
  );
};

export default Summarypage;
