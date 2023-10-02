import React, { useContext } from 'react';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import imagem from '../../assets/secure.png';
import UserContext from '../../context/User/UserContext';
import { Success, Error } from '../../components/Alert/Alert';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const obj = {
        email,
      };
      const response = await api.post('/forgot-password', obj);
      console.log(response);
      Success(`Welcome ${response}`);
      // navigate('/login');
    } catch (error) {
      Error('Credenciais Incorretas!');
      console.error('Erro', error);
    }
  };
  return (
    <div className="flex justify-around h-screen">
      <div className="w-1/2 bg-okr-blue flex flex-col justify-center text-center">
        <form action="" className="flex flex-col text-left w-1/2 m-auto">
          <p className="title">SigIn</p>
          <p className="my-8 text-white">
            Enter your email and we’ll send you a link to reset your password
          </p>
          <label className="mt-20 mb-3 t-label">Email</label>
          <input
            type="email"
            className="t-input"
            onChange={({ target }) => setEmail(target.value)}
          />
          <button className="mt-8 button" onClick={handleForm}>
            Enter
          </button>
        </form>
      </div>
      <div className="w-1/2 h-screen flex flex-col justify-center ">
        <a href="login" className="w-44 p-6 self-end">
          OKR System
        </a>
        <img src={imagem} alt="" className="m-auto " />
      </div>
    </div>
  );
};

export default ForgotPassword;
