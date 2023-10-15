import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Survey from './Survey';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/survey/:number" element={<Survey />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;

