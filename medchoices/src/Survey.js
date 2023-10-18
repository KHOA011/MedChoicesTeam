import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Survey = () => {
  const { number } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState(Array(questions.length).fill(0));
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(`/question/${number}.txt`);
        if (response.ok) {
          const text = await response.text();
          const questionList = text.split('\n').filter((line) => line.trim() !== '');
          setQuestions(questionList);
          setResponses(Array(questionList.length).fill(0));
        } else {
          console.error('Failed to fetch questions.');
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, [number]);

  const handleRatingChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleSubmit = () => {
    // Validation for age
    if (!/^\d{2}$|^[3-7]\d$|^80$/.test(age)) {
      alert('Please enter a valid age between 16 and 80.');
      return;
    }
  
    // Validation for email
    if (!/^.+@.+\..{2,30}$/.test(email)) {
      alert('Please enter a valid email (less than 30 characters).');
      return;
    }
  
    // Validation for phone
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 9-digit phone number.');
      return;
    }
    // Create an object with user responses
    const userResponse = {
      age,
      email,
      phone,
      surveyResponses: responses,
    };

    // Redirect to the summary page and pass the user response data
    navigate('/summary', { state: { userResponse, questions } });
  };

  const surveyFormStyle = {
    backgroundColor: '#fff',
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px 20px',
    boxShadow: '2px 5px 10px rgba(0, 0, 0, 0.5)',
  };
  
  const formControlStyle = {
    textAlign: 'left',
    marginBottom: '25px',
  };
  
  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
  };
  
  const inputStyle = {
    border: '1px solid #777',
    borderRadius: '2px',
    fontFamily: 'inherit',
    padding: '10px',
    display: 'block',
    width: '95%',
  };
  
  return (
    <div className="survey-container">
      <form id="form" style={surveyFormStyle}>
        <div key="age" style={formControlStyle}>
          <label style={labelStyle} htmlFor="age">
            Age
          </label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={inputStyle}
            id="age"
          />
        </div>

        <div key="email" style={formControlStyle}>
          <label style={labelStyle} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            id="email"
          />
        </div>

        <div key="phone" style={formControlStyle}>
          <label style={labelStyle} htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
            id="phone"
          />
        </div>

        {questions.map((question, index) => (
          <div key={index} style={formControlStyle}>
            <label style={labelStyle} htmlFor={`question-${index}`}>
              {question}
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={responses[index]}
              onChange={(e) => handleRatingChange(index, parseInt(e.target.value, 10))}
              style={inputStyle}
              id={`question-${index}`}
            />
          </div>
        ))}

        <button onClick={handleSubmit} className="submit-button">
          Submit Survey
        </button>
        <button onClick={goBack} className="go-back-link">
          Back
        </button>
      </form>
    </div>
  );
};

export default Survey;