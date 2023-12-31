import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home'
import Registro from '../pages/Registro'
import Login from '../pages/Login';
import Autenticacion from '../pages/Autenticacion';

export function LasRutas() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/:userId" element={<Autenticacion />} />
      </Routes>
    </Router>
  );
}


