import React, { useContext } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  const logoutApp = async () => {
    const data = await api.post('/logout');
    logout();
    localStorage.removeItem('x-auth-token');
  };

  React.useEffect(() => {
    logoutApp();
    navigate('/login');
  }, []);

  return;
};

export default SignUp;
