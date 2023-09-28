import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import imagem from '../../assets/logo_okr.svg';

const ResetPassword = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [pconfirmed, setPconfirmed] = React.useState();

  let { token } = useParams();

  const handlePassword = async (e) => {
    e.preventDefault();

    const obj = {
      token,
      email,
      password,
      password_confirmation: pconfirmed,
    };

    const data = await api.post(`/reset-password/${token}`, obj);

    if (data.status == 201) return navigate('/login');
  };

  return (
    <div className="form">
      <form method="post" className="flex flex-col w-1/3">
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
          className="input focus:outline-none focus:border-sky-500"
        />
        <label htmlFor="confirmed-password" className="text-okr-gray label ">
          Confirme you Password
        </label>
        <input
          type="password"
          name="confirmed-password"
          id="confirmed-password"
          onChange={({ target }) => setPconfirmed(target.value)}
          className="input focus:outline-none focus:border-sky-500"
        />
        <button onClick={handlePassword} type="submit" className="button ">
          Enter
        </button>
        {/* <a href="/login">Login</a> */}
      </form>
      <img src={imagem} className="w-1/3" alt="" />
    </div>
  );
};

export default ResetPassword;
