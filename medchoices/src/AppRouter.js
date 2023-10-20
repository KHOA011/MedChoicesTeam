// AppRouter.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AboutUs from './AboutUs';
import Survey from './Survey';
import SummaryPage from './Summary';
import Homepage from './Homepage';
import DoYouKnow from './DoYouKnow'; // Add this import
import FAQs from './FAQs'; // Add this import

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/survey/:number" element={<Survey />} />
      <Route path="/summary" element={<SummaryPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/do-you-know" element={<DoYouKnow />} /> // Add this route
      <Route path="/faqs" element={<FAQs />} /> // Add this route
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
