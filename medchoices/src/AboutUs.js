import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
const AboutUs = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <Sidebar/>
        <h2>About Us: <span style={{ color: 'orange' }}>The Vietnamese Gang</span></h2>
        <div className="about-us-text">
          <p>
            <br /><br />
            We are the Vietnamese Gang, a dedicated team comprising Khoa Le, Thao Tu, Linh Truong, and Ngoc Truong. Our mission is to empower and support students at the University of Nebraska–Lincoln (UNL) by addressing the challenges they face in accessing essential health services.
            <br /><br />
            <em>The Challenge</em>
            <br /><br />
            Students at UNL often find themselves unaware of the wealth of health resources available to them, both on and off-campus. This lack of awareness can be attributed to multiple factors, including the sheer volume of available resources, outdated or confusing information, and a lack of outreach from the university.
            <br /><br />
            <em>Navigating Complex Health Care</em>
            <br /><br />
            Within campus, UNL provides a health care application that, despite its availability, can be complex and bewildering, even for experienced users. Students may struggle with understanding their insurance coverage or identifying the right providers for their unique needs.
            <br /><br />
            <em>Balancing Multiple Commitments</em>
            <br /><br />
            Moreover, students at UNL lead multifaceted lives, juggling academic classes, work, extracurricular activities, and social engagements. This hectic schedule can make it challenging to dedicate time to research and access health resources.
            <br /><br />
            <em>Tailored Health Solutions</em>
            <br /><br />
            Even when students are aware of available resources and can allocate time to access them, they may still not receive optimal care and support tailored to their specific needs. Language barriers, cultural differences, and the lack of specialized services can all contribute to this challenge.
            <br /><br />
            <em>Our Solution</em>
            <br /><br />
            In response to these issues, our proposal centers around the development of a comprehensive online platform. This platform will serve as a one-stop solution for UNL students, assisting them in discovering and connecting with the most suitable health resources.
            <br /><br />
            <em>Personalized Recommendations</em>
            <br /><br />
            By collecting and analyzing relevant information through surveys and leveraging advanced algorithms, our platform will provide personalized recommendations. This ensures that students can effortlessly access the necessary health services and professionals that align with their distinct needs.
            <br /><br />
            <em>Enhancing Well-being</em>
            <br /><br />
            Our ultimate goal is to enhance the overall health and well-being of UNL students. We aspire to create a more productive and thriving academic community by offering a tailored approach to accessing health resources.
            <br /><br />
            Join us on our journey to simplify the path to well-being. Together, we can ensure that every UNL student has the support they need to thrive in their academic and personal lives.
          </p>
        </div>
        <button onClick={goBack} className="go-back-link">Back</button>
      </div>
    </div>
  );
}

export default AboutUs;