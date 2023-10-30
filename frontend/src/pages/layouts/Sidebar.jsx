import React from 'react';

const Sidebar = ({ name, projects }) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    setData(name);
  }, []);

  return (
    <div className="md:w-[300px] w-[400px] md:h-[800px] rounded-2xl ml-4 bg-okr-blue shadow-3xl shadow-[#134D92]-500/50">
      <div className="flex gap-2 py-4 justify-center">
        <div className="w-[50px] h-[50px] rounded-md bg-white"></div>
        <div className="">
          <p className="text-white text-lg">{data ?? data}</p>
          <p className="text-white text-[12px] ">Oliveira</p>
        </div>
      </div>
      <div className=" h-px bg-white bg-opacity-60 mx-5"></div>
      <div>
        <p className="text-lg text-white font-bold text-center my-4">
          Projects
        </p>
        <ul>
          {projects &&
            projects
              .filter((item) => {
                if (item.type == 0) return item;
              })
              .map((project) => (
                <li key={project.name}>
                  <a
                    href={`project/${project.id}`}
                    className="text-white ml-4 hover:text-okr-blue-dark"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
        </ul>
        <p className="text-lg text-white font-bold text-center my-4">Private</p>
        <ul>
          {projects &&
            projects
              .filter((item) => {
                if (item.type == 1) return item;
              })
              .map((project) => (
                <li key={project.name}>
                  <a
                    href={`project/${project.id}`}
                    className="text-white ml-4 hover:text-okr-blue-dark"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
