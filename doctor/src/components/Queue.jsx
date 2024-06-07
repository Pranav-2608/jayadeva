import React, { useState } from 'react';
import './Queue.css';

const Queue = () => {
  const [patients, setPatients] = useState([]);

  const addToQueue = (patientName) => {
    setPatients([...patients, patientName]);
  };

  const removeFromQueue = () => {
    if (patients.length === 0) {
      alert('Queue is empty!');
      return;
    }
    const updatedQueue = patients.slice(1); // Remove the first patient from the queue
    setPatients(updatedQueue);
  };

  return (
    <div className="queue">
      <h2>Queue</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>{patient}</li>
        ))}
      </ul>
      <button onClick={removeFromQueue}>Call Next Patient</button>
      <form onSubmit={(e) => {
        e.preventDefault();
        const patientName = e.target.elements.patientName.value;
        addToQueue(patientName);
        e.target.reset();
      }}>
        <input type="text" name="patientName" placeholder="Enter patient name" />
        <button type="submit">Add to Queue</button>
      </form>
    </div>
  );
};

export default Queue;
