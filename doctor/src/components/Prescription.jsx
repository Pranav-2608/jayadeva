<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
import './Prescription.css';

const Prescription = () => {
  const [patientName, setPatientName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatment, setTreatment] = useState('');
  const [dosage, setDosage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      patientName,
      symptoms,
      diagnosis,
      treatment,
      dosage,
    };

    try {
      console.log("Working");
      const response = await axios.post('http://localhost:4000/api/v1/prescriptions/form', data, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.data);
      alert('Prescription submitted successfully!');
      // Reset form fields
      setPatientName('');
      setSymptoms('');
      setDiagnosis('');
      setTreatment('');
      setDosage('');
    } catch (error) {
      console.error('There was an error submitting the prescription!', error);
      alert('Failed to submit the prescription. Please try again.');
    }
  };

=======
import React from 'react';
import './Prescription.css';
import UploadDoc from './UploadDoc';

const Prescription = () => {
>>>>>>> 18a6f6c1d9ba91849a022773e0f86e148db94d9d
  const fetchPrescription = () => {
    alert("Fetch prescription functionality not implemented yet.");
  };

  return (
    <div className="h-full flex flex-col mx-auto w-full items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Patient Prescription Form</h2>
        <form onSubmit={handleSubmit} className='h-full'>
          <div className="mb-4">
            <label htmlFor="patient-name" className="block text-sm font-medium text-gray-700">Patient Name</label>
            <input
              type="text"
              id="patient-name"
              name="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">Symptoms</label>
            <textarea
              id="symptoms"
              name="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">Diagnosis</label>
            <textarea
              id="diagnosis"
              name="diagnosis"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="treatment" className="block text-sm font-medium text-gray-700">Treatment</label>
            <textarea
              id="treatment"
              name="treatment"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="dosage" className="block text-sm font-medium text-gray-700">Medicine Dosage</label>
            <textarea
              id="dosage"
              name="dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" className="fetch-btn" onClick={fetchPrescription}>Fetch Prescription</button>
            <button type="submit" className="ml-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          </div>
        </form>
      </div>
      <div className="mt-8 w-full max-w-lg">
        <UploadDoc />
      </div>
    </div>
  );
}

export default Prescription;
