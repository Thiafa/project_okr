import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../context/UserContext';

const Home = () => {
  const data = useContext(UserContext);
  const { user } = data;
  const navigate = useNavigate();

  return (
    <div>
      Bem vindo {user}
      <button
        onClick={() => {
          navigate('/logout');
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Home;
