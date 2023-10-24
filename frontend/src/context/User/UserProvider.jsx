import React, { createContext, useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(
    () => localStorage.getItem('user') ?? null,
  );

  const logout = () => {
    setUser(null);
    localStorage.getItem('user');
    localStorage.getItem('x-auth-token');
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
