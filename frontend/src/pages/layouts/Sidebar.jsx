import React from 'react';

const Sidebar = ({ name }) => {
  return (
    <div className="w-1/6 h-[800px] rounded-2xl ml-4 mt-4 bg-okr-blue shadow-3xl shadow-[#134D92]-500/50">
      <div className=" text-center">
        {/* <div className="w-[50px] h-[50px] rounded-md bg-white "></div> */}
        {name}
      </div>
    </div>
  );
};

export default Sidebar;
