import React, { useContext } from 'react';
import Sidebar from '../layouts/Sidebar';
import UserContext from '../../context/User/UserContext';

const Main = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Sidebar name={user ?? user} />
    </div>
  );
};

export default Main;
