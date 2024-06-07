import React from 'react';
import { CiUser } from "react-icons/ci";
import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { MdAddToQueue } from "react-icons/md";
import DetailedCalendarComponent from './Calendar';

const Dashboard = () => {

  const functions = [
    {
      name: "Patient",
      logo: <CiUser />,
    },
    {
      name: "Prescription",
      logo: <FaPrescriptionBottleAlt />,
    },
    {
      name: "Queue",
      logo: <MdAddToQueue />
    }
  ];

  return (
    <div className='w-full flex flex-col gap-20'>
      <div className=' flex justify-evenly'>
        {
          functions.map((functionObj, index) => (
            <div key={index} className='border border-black rounded-lg h-[100px] w-[200px] flex flex-col items-center justify-center'>
              {functionObj.logo}
              <p>{functionObj.name}</p>
              <p>1</p>
            </div>
          ))
        }
      </div>
      <div className='flex items-center justify-center w-full'>
        <DetailedCalendarComponent className="bg-blue-100" />
      </div>
    </div>
  );
}

export default Dashboard;