import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import imgHome from '../../assets/checklist.png';
import UserContext from '../../context/User/UserContext';
import Nav from '../../components/NavBar/Nav';

const Home = () => {
  // const data = useContext(UserContext);
  // const { user } = data;
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex d justify-around pt-10 px-16 items-center">
        <div className="">
          <p className="font-normal text-7xl">
            Best Service to <br /> <span className="font-bold"> Achieve</span>{' '}
            Your <span className="font-bold">Goals</span>
          </p>
          <p className="my-10">Your Best Partner for Growth</p>
          <a
            href="register"
            className="nav-button bg-okr-blue font-bold text-lg text-white hover:bg-slate-500"
          >
            Sign Up
          </a>
        </div>
        <div>
          <img src={imgHome} alt="" />
        </div>
      </div>
      {/* <div className="text-center">To Devs</div> */}
    </div>
  );
};

export default Home;
