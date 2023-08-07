import React, { useContext } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../context/UserContext';

const Sign = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const obj = {
        email,
        password,
      };

      const { data } = await api.post('/login', obj);
      localStorage.setItem('x-auth-token', data.token);

      setUser(data.name);

      navigate('/home');
    } catch (error) {
      console.error('Erro', error);
    }
  };

  return (
    <form method="post">
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          id="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      <button onClick={handleLogin} type="submit">
        Enter
      </button>
    </form>
  );
};

export default Sign;
