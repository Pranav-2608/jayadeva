import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { MdAddToQueue } from "react-icons/md";
import Dashboard from '../components/Dashboard';
import Prescription from '../components/Prescription';
import Queue from '../components/Queue';
import Calendar from '../components/Calendar';
import './Doctor.css'; // Import the CSS file

const features = [
  {
    name: "Dashboard",
    logo: <MdDashboard />,
  },
  {
    name: "Prescription",
    logo: <FaPrescriptionBottleAlt />,
  },
  {
    name: "Queue",
    logo: <MdAddToQueue />,
  }
];

export default function Doctor() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className='doctor-page'>
      <div className='sidebar'>
        {
          features.map((featureObj, index) => (
            <button key={index} className='feature-button' onClick={() => setActive(`${featureObj.name}`)}>
              {featureObj.logo}
              <p>{featureObj.name}</p>
            </button>
          ))
        }
      </div>

      <div className='content'>
        {
          active === "Dashboard" ? (<Dashboard />)
            : active === "Prescription" ? (<Prescription />)
            : active === "Queue" ? (<Queue />)
            : (<Calendar />)
        }
      </div>
    </div>
  );
}
