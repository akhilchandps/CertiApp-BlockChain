import React from 'react';
import { useLocation } from 'react-router-dom';
import img from '../img/online-course.png';

const ViewCertificate = () => {
  const location = useLocation();
  const { data } = location.state || {};

  console.log("Received Data:", data);

  return (
    <div>
      <div>
        <ul className="flex flex-col items-center gap-5">
          <li><img src={img} alt="Certificate" className="w-96" /></li>
          {data ? (
            <>
              <li>This certifies that  <span className='font-bold'>{data.Name}</span></li>
              <li>has Successfully Compelted  <span className='font-bold'>{data.Course}</span></li>
              <li>with  <span className='font-bold'>{data.Grade}</span>  on <span className='font-bold'>{data.Date}</span>  </li>
            </>
          ) : (
            <li>No certificate data available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ViewCertificate;
