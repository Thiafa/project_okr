import React, { useContext } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import imgHome from '../../assets/consulting.png';
import UserContext from '../../context/User/UserContext';
import { Success, Error } from '../../components/Alert/Alert';

const SignUp = () => {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const obj = {
        name,
        email,
        password,
      };

      const { data } = await api.post('/register', obj);
      localStorage.setItem('x-auth-token', data.token);

      setUser(data.name);
      Success('Teste');
      navigate('/home');
    } catch (error) {
      Error('Credenciais Incorretas!');
      console.error('Erro', error);
    }
  };
  return (
    <div className="flex justify-around h-screen">
      <div className="w-1/2 bg-okr-blue flex flex-col justify-center text-center">
        <form action="" className="flex flex-col text-left w-1/2 m-auto">
          <p className="title">SigUp</p>
          <label className="mt-8 mb-3 t-label">Name</label>
          <input
            type="text"
            className="t-input"
            onChange={({ target }) => setName(target.value)}
          />
          <label className="mt-8 mb-3 t-label">Email</label>
          <input
            type="email"
            className="t-input"
            onChange={({ target }) => setEmail(target.value)}
          />
          <label className="mt-8 mb-3 t-label">Password</label>
          <input
            type="password"
            className="t-input"
            onChange={({ target }) => setPassword(target.value)}
          />
          <button className="mt-8 button" onClick={handleRegister}>
            Enter
          </button>
          <div className="flex items-center justify-between w-full my-14">
            <div className="divider"></div>{' '}
            <div className="mx-10 font-bold text-white">OR</div>
            <div className="divider"></div>{' '}
          </div>
          <a
            href="login"
            className="text-md text-center font-medium pt-2 text-white hover:text-okr-blue-dark"
          >
            SignIn
          </a>
        </form>
      </div>
      <div className="w-1/2 h-screen flex flex-col justify-center ">
        <a href="" className="w-44 p-6">
          OKR System
        </a>
        <img src={imgHome} alt="" className="m-auto " />
      </div>
    </div>
  );
};

export default SignUp;
