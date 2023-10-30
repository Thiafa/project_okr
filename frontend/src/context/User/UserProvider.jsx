import React, { createContext, useState } from 'react';
import UserContext from './UserContext';
import api from '../../services/api';

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(
    () => localStorage.getItem('user') ?? null,
  );
  const [project, setProject] = React.useState();

  const logout = () => {
    setUser(null);
    localStorage.getItem('user');
    localStorage.getItem('x-auth-token');
  };

  const getProject = async () => {
    const response = await api.get(`/project`);
    setProject(response.data.data);
  };

  React.useEffect(() => {
    getProject();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, project, setProject, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
