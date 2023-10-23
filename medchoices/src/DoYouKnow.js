import React from 'react';
import { Link } from 'react-router-dom';

const DoYouKnow = () => {
  return (
    <div className="survey-container">
      <div className="do-you-know">
        <h2>Do You Know</h2>
        <p>Here are some information you would like to know:</p>
        <li>
          <strong>Depression:</strong> Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems.
        </li>
        <li>
          <strong>Bipolar:</strong> Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).
        </li>
        <li>
          <strong>Anxiety:</strong> Anxiety is an emotion characterized by feelings of tension, worried thoughts, and physical changes like increased blood pressure.
        </li>
        <li>
          <strong>Related words with DEPRESSION:</strong> Sadness, despair, emptiness, hopelessness, fatigue, worthlessness, apathy and isolation.
        </li>
        <li>
          <strong>Related words with BIPOLAR:</strong> Manic, depressive, cyclical, unstable, erratic, volatile intense, unpredictable.
        </li>
        <li>
          <strong>Related words with ANXIETY:</strong> ear, worry, concern, unease, nervousness, fearfulness, angst, apprehension, disquiet, doubt, dread
        </li>
      </div>
    </div>
  );
};

export default DoYouKnow;
