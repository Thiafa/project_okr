import React from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const obj = {
      name: username,
      email,
      password,
    };

    console.log(obj);

    const data = await api.post('/register', obj);

    if (data.status == 201) return navigate('/login');
  };

  return (
    <form method="post">
      <label htmlFor="username">
        Username
        <input
          type="text"
          name="name"
          id="name"
          onChange={({ target }) => setUsername(target.value)}
        />
      </label>
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
      <button onClick={handleRegister} type="submit">
        Enter
      </button>
    </form>
  );
};

export default Register;
