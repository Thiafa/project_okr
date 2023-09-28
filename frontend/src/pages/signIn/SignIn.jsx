import React, { useContext } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import imgHome from '../../assets/consulting.png';
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
    <div className="flex justify-around h-screen">
      <a href="">OKR System</a>
      <div className="w-1/2 d-flex justify-center">
        <img src={imgHome} alt="" />
      </div>
      <div className="w-1/2 bg-okr-blue flex flex-col justify-center text-center">
        <p>SigIn</p>
        <form action="" className="flex flex-col">
          <label>
            Email
            <input type="text" />
          </label>
          <label>
            Password
            <input type="text" />
          </label>
          <button className="">Enter</button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
