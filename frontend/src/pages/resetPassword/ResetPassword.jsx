import React, { useContext } from 'react';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import imagem from '../../assets/secure.png';
import UserContext from '../../context/User/UserContext';
import { Success, Error } from '../../components/Alert/Alert';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmation, setConfirmation] = React.useState();
  const navigate = useNavigate();
  const params = useParams();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const obj = {
        email,
        password,
        password_confirmation: confirmation,
        token: params.token,
      };
      const response = await api.post(`/reset-password/${params.token}`, obj);

      Success(`${response.data.message}`);
      navigate('/login');
    } catch (error) {
      if (error.response) {
        Error(error.response.data.message);
      }
    }
  };
  return (
    <div className="flex justify-around h-screen">
      <div className="w-1/2 bg-okr-blue flex flex-col justify-center text-center">
        <form action="" className="flex flex-col text-left w-1/2 m-auto">
          <p className="title">Reset</p>
          <p className="my-8 text-white text-center">
            Enter your email and your new password
          </p>
          <label className="mt-20 mb-3 t-label">Email</label>
          <input
            type="email"
            className="t-input"
            onChange={({ target }) => setEmail(target.value)}
          />
          <label className="mt-20 mb-3 t-label">Password</label>
          <input
            type="password"
            className="t-input"
            onChange={({ target }) => setPassword(target.value)}
          />
          <label className="mt-20 mb-3 t-label">Confirm Password</label>
          <input
            type="password"
            className="t-input"
            onChange={({ target }) => setConfirmation(target.value)}
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
