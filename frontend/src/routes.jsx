import React from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './pages/signIn/SignIn';
import SignOut from './pages/signOut/SignOut';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/home/Home';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import ResetPassword from './pages/resetPassword/ResetPassword';

export function ProtectedRoutes({ children }) {
  const user = localStorage.getItem('x-auth-token');
  if (user && user !== '') {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/logout"
          element={
            <ProtectedRoutes>
              <SignOut />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
