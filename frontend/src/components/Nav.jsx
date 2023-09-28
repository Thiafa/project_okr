import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex justify-between mx-60 my-10">
      <div>
        <a className="text-xl font-medium">OKR System</a>
      </div>
      <div>
        <a href="login" className="nav-button me-6 text-lg ">
          Log In
        </a>
        <a href="register" className="nav-button border-2 font-bold text-lg">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Nav;
