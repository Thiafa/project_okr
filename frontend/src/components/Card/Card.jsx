import React from 'react';

const Card = ({ data }) => {
  React.useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="card bg-white m-auto">
      {data && (
        <>
          <p className="titulo-okr font-bold flex justify-center items-center pt-4 ">
            {data.objective}
          </p>
          <ul>
            <li className="paragrafo-okr py-2 ">
              {data.taskone && data.taskone}
            </li>
            <li className="paragrafo-okr py-2">
              {data.tasktwo && data.tasktwo}
            </li>
            <li className="paragrafo-okr py-2">
              {data.taskthree && data.taskthree}
            </li>
            <li className="paragrafo-okr py-2">
              {data.taskthree && data.taskthree}
            </li>
            <li className="paragrafo-okr py-2">
              {data.taskfour && data.taskfour}
            </li>
            <li className="paragrafo-okr py-2">
              {data.taskfive && data.taskfive}
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Card;
