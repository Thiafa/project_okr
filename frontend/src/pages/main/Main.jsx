import React, { useContext } from 'react';
import Sidebar from '../layouts/Sidebar';
import UserContext from '../../context/User/UserContext';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

const Main = () => {
  const { user, project, setProject } = useContext(UserContext);

  async function getProject() {
    const response = await api.get('/project');
    setProject(response.data.data);
  }

  React.useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="flex">
      <Sidebar name={user && user} projects={project && project} />
      {/* <Dashboard></Dashboard> */}
    </div>
  );
};

export default Main;
