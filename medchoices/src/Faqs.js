import React from 'react';
import Sidebar from './Sidebar';

function Faqs() {
  return (
    <div className="about-us-container">
      <Sidebar />
      <div className="about-us-content">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          <li>
            <strong>What is MedChoices?</strong>
            <p>
              MedChoices is a healthcare appointment scheduling app designed to streamline the process of finding and accessing health resources for University of Nebraska–Lincoln (UNL) students, staff, and faculty.
            </p>
          </li>
          <li>
            <strong>How does MedChoices work?</strong>
            <p>
              MedChoices works by having users fill out a comprehensive survey before scheduling an appointment. This survey collects information about the user's health history, symptoms, and preferences. Based on this information, the app matches users with the most suitable healthcare resources.
            </p>
          </li>
          <li>
            <strong>Why should I use MedChoices instead of the current scheduling system?</strong>
            <p>
              MedChoices aims to improve the efficiency and effectiveness of healthcare appointments at UNL by providing a more personalized and streamlined experience. The app ensures that users are matched with the right healthcare professionals based on their specific needs.
            </p>
          </li>
          <li>
            <strong>Is my information secure on MedChoices?</strong>
            <p>
              Yes, your privacy and data security are our top priorities. MedChoices employs robust encryption measures to ensure the confidentiality of your personal information, including your NUID. We adhere to strict data protection standards to safeguard your data.
            </p>
          </li>
          <li>
            <strong>What types of health resources can I find on MedChoices?</strong>
            <p>
              MedChoices provides information about a wide range of health resources, including medical care, counseling, wellness initiatives, support groups, and more. The goal is to connect users with the resources that best meet their individual requirements.
            </p>
          </li>
          <li>
            <strong>What happens if I face technical issues with the app?</strong>
            <p>
              If you encounter any technical issues with MedChoices, you can reach out to our support team through the app. We are committed to addressing and resolving any issues promptly to ensure a smooth user experience.
            </p>
          </li>
          <li>
            <strong>How does MedChoices ensure accessibility for UNL students and staff at the Health Center?</strong>
            <p>
              MedChoices is designed with a user-centric approach, specifically catering to the needs of UNL students and staff seeking health services at the Health Center. If you have specific accessibility needs or encounter challenges, please let us know, and we will work to accommodate your requirements within the UNL community.
            </p>
          </li>
          <li>
            <strong>Is my personal information, including my NUID (student ID), safe on MedChoices?</strong>
            <p>
              Yes, your privacy and data security are our top priorities. MedChoices employs robust encryption measures to ensure the confidentiality of your personal information, including your NUID. We adhere to strict data protection standards to safeguard your data.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Faqs;
  