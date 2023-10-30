import React, { useContext } from 'react';
import Sidebar from '../layouts/Sidebar';
import UserContext from '../../context/User/UserContext';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/card';

const Project = () => {
  const { user, project } = useContext(UserContext);
  const { projectId } = useParams();
  const [data, setData] = React.useState();

  async function getProject() {
    const response = await api.get(`/project/${projectId}`);
    setData(response.data.data);
    console.log(data);
  }

  React.useEffect(() => {
    getProject();
    console.log(data);
  }, []);

  return (
    <div className="flex gap-8 mt-8 flex-col md:flex-row md:justify-between">
      <Sidebar name={user && user} projects={project && project} />
      <div className="md:w-1/3 flex flex-col md:gap-8">
        <h1 className="text-4xl text-center font-bold">ToDev</h1>
        <p className="titulo-okr">OKR Main</p>
        <Card data={data && data.okrs[0]} />
        <p className="titulo-okr">Your OKR</p>
        <Card data={data && data.okrs[0]} />
      </div>
      <div className="md:w-1/3 rounded-2xl h-[850px] me-4 md:bg-okr-blue pt-8 flex-col md:overflow-auto -webkit-scrollbar ">
        <form className="card bg-white m-auto px-8">
          <p className="pt-6 text-center">Search</p>
          <label htmlFor="" className="t-label">
            Name
          </label>
          <input type="text" className="t-input w-full" />
          <div className="flex flex-row gap-2">
            <label htmlFor="" className="t-label w-[10px]">
              Person
              <input type="text" className="t-input" />
            </label>
            <label htmlFor="" className="t-label w-[10px]">
              Departament
              <input type="text" className="t-input" />
            </label>
          </div>
          <a href="">Clear</a>
          <button type="submit">Search</button>
        </form>
        {data &&
          data.okrs.map((item) => (
            <div className="my-4">
              <Card data={item && item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Project;
