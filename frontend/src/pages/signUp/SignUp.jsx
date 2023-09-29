import React from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/logo_okr.svg';

const SignUp = () => {
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const navigate = useNavigate();

  const handlesignup = async (e) => {
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
    <div className="form">
      <form method="post" className="flex flex-col w-1/3">
        <label htmlFor="username" className="text-okr-gray label ">
          Username
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={({ target }) => setUsername(target.value)}
          className="input focus:outline-none focus:border-sky-500"
        />
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
        <button onClick={handlesignup} type="submit" className="button ">
          Enter
        </button>
        <a href="/login">Login</a>
      </form>
      <img src={imagem} className="w-1/3" alt="" />
    </div>
  );
};

export default SignUp;
