import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Survey from './Survey';
import SummaryPage from './Summary'; // Corrected import

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/survey/:number" element={<Survey />} />
      <Route path="/summary" element={<SummaryPage />} /> {/* Corrected import */}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;



