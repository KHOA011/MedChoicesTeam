import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AboutUs from './AboutUs';
import Survey from './Survey';
import SummaryPage from './Summary';
import HomePage from './Homepage';
import FAQs from './Faqs';
import Fact from './Fact';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/survey/:number" element={<Survey />} />
      <Route path="/summary" element={<SummaryPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/fact" element={<Fact />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;



