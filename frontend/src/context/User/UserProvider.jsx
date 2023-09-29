import React, { createContext, useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(
    () => localStorage.getItem('user') ?? null,
  );

  React.useEffect(() => {
    login();
  }, [user]);

  const login = () => {
    localStorage.setItem('user', user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
