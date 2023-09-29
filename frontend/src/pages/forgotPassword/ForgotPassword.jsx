import React, { useContext } from 'react';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import imagem from '../../assets/logo_okr.svg';
import UserContext from '../../context/User/UserContext';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const obj = {
        email,
      };

      const { data } = await api.post('/forgot-password', obj);
      console.log(data);
    } catch (error) {
      alert('Email incorreto!');
      console.error('Erro', error);
    }
  };
  return (
    <div className="form">
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
          className="input focus:outline-none focus:bg-white"
        />

        <button
          onClick={handleForm}
          type="submit"
          className="button hover:bg-slate-500 "
        >
          Send
        </button>
        <a href="/register" className="text-center mt-5">
          Register
        </a>
      </form>
    </div>
  );
};

export default ForgotPassword;
