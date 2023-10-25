import React from 'react';

const Sidebar = ({ name }) => {
  return (
    <div className="md:w-[300px] w-[100px] h-[800px] rounded-2xl ml-4 mt-4 bg-okr-blue shadow-3xl shadow-[#134D92]-500/50">
      <div className="flex gap-2 py-4 justify-center">
        <div className="w-[50px] h-[50px] rounded-md bg-white"></div>
        <div className="">
          <p className="text-white text-lg">{name}</p>
          <p className="text-white text-[12px] ">Oliveira</p>
        </div>
      </div>
      <div className=" h-px bg-white bg-opacity-60 mx-5"></div>
      <div>
        <p className="text-lg text-white font-bold text-center">Projects</p>
        <p className="text-lg text-white font-bold text-center">Private</p>
      </div>
    </div>
  );
};

export default Sidebar;
