import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import DetailedCalendarComponent from './Calendar';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [queue, setQueue] = useState([]);
  const [nextPatient, setNextPatient] = useState(null); // Initialize to null
  const [showQueue, setShowQueue] = useState(false);
  const [newPatientName, setNewPatientName] = useState('');

  const addPatientToQueue = () => {
    if (newPatientName.trim() !== '') {
      setQueue([...queue, newPatientName]);
      if (nextPatient === null) {
        setNextPatient(newPatientName); // Set nextPatient only if it's null
      }
      setNewPatientName('');
    } else {
      alert("Please enter a valid patient name.");
    }
  };
  
  const removePatientFromQueue = (index) => {
    const updatedQueue = [...queue];
    updatedQueue.splice(index, 1);
    setQueue(updatedQueue);
    if (updatedQueue.length === 0) {
      setNextPatient(null); // Reset nextPatient if queue becomes empty
    }
  };

  const handlePatientClick = () => {
    const name = prompt("Enter the patient's name:");
    if (name !== null) {
      if (name.trim() !== '') {
        setNewPatientName(name);
        addPatientToQueue();
      } else {
        alert("Please enter a valid patient name.");
      }
    } else {
      alert("Action canceled. Please enter a valid patient name.");
    }
  };
  
  const handleCancelPatient = () => {
    if (queue.length > 0) {
      const confirmed = window.confirm("Are you sure you want to cancel the current patient?");
      if (confirmed) {
        setQueue((prevQueue) => prevQueue.slice(1)); // Remove the current patient
        if (queue.length > 1) {
          setNextPatient(queue[1]); // Set the next patient in line
        } else {
          setNextPatient(null); // Reset nextPatient if queue becomes empty
        }
      }
    } else {
      alert("There are no patients in queue to cancel.");
    }
  };

  const handleShowQueue = () => {
    setShowQueue(!showQueue);
  };

  const handleLogout = () => {
    // Logic to log out from the page
    // This can be implemented using authentication context or redirecting to a login page
    window.location.href = '/'; // Example: Redirecting to login page
  };

  return (
    <div className='dashboard'>
      <nav className='navbar'>
        <div className='logo' onClick={handlePatientClick}>
          <CiUser />
          <p>Patient</p>
        </div>
        <button className='logout-button' onClick={handleLogout}>Logout</button>
      </nav>
      {nextPatient && (
        <div className='next-patient-container'>
          <div className='next-patient-card'>
            <h2 className='next-patient-title'>Next Patient in Queue:</h2>
            <p className='next-patient-name'>{nextPatient}</p>
          </div>
        </div>
      )}
      <div className='queue-container'>
        <button className='cancel-button' onClick={handleCancelPatient}>
          Cancel
        </button>
        <button className='show-queue-button' onClick={handleShowQueue}>
          {showQueue ? 'Hide Queue' : 'Show Queue'}
        </button>
        {showQueue && (
          <div className='full-queue'>
            <h3>Full Queue:</h3>
            {queue.map((patient, index) => (
              <p key={index}>{patient}</p>
            ))}
          </div>
        )}
      </div>
      <div className='calendar-container'>
        <DetailedCalendarComponent />
      </div>
    </div>
  );
}

export default Dashboard;
