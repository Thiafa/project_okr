import React, { useContext } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/logo_okr.svg';
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
      alert('Credenciais Incorretas!');
      console.error('Erro', error);
    }
  };

  return (
    <div className="form">
      <img src={imagem} className="w-1/3" alt="" />
      <form method="post" className="flex flex-col w-1/3">
        <h2 className="text-3xl font-bold text-okr-gray text-center">Login</h2>
        <label htmlFor="email" className="text-okr-gray label ">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={({ target }) => setEmail(target.value)}
          className="input focus:outline-none focus:border-sky-500"
        />

        <label htmlFor="password" className="text-okr-gray label ">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={({ target }) => setPassword(target.value)}
          className="input focus:outline-none focus:bg-red-500 " 
        />

        <button onClick={handleLogin} type="submit" className="button ">
          Enter
        </button>
        <a href="/register">Register</a>
      </form>
    </div>
  );
};

export default Sign;
