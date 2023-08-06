import React from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import Register from './pages/register/Register';
import Home from './pages/home/Home';

export function ProtectedRoutes({ children }) {
  const user = localStorage.getItem('x-auth-token');
  if (user && user !== '') {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/logout"
          element={
            <ProtectedRoutes>
              <SignUp />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home></Home>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
