import React from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const data = await api.post('/logout');
    localStorage.removeItem('x-auth-token');
  };

  React.useEffect(() => {
    logout();
    navigate('/login');
  }, []);

  return;
};

export default SignUp;
