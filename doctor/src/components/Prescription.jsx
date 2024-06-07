import React from 'react';
import './Prescription.css';

const Prescription = () => {
  const fetchPrescription = () => {
    // Fetch prescription logic here
    alert("Fetch prescription functionality not implemented yet.");
  };

  return (
    <div className="h-full flex flex-col mx-auto w-full items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Patient Prescription Form</h2>
        <form action="#" method="POST" className='h-full'>
          <div className="mb-4">
            <label htmlFor="patient-name" className="block text-sm font-medium text-gray-700">Patient Name</label>
            <input type="text" id="patient-name" name="patient_name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">Symptoms</label>
            <textarea id="symptoms" name="symptoms" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">Diagnosis</label>
            <textarea id="diagnosis" name="diagnosis" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="treatment" className="block text-sm font-medium text-gray-700">Treatment</label>
            <textarea id="treatment" name="treatment" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="medicine-dosage" className="block text-sm font-medium text-gray-700">Medicine Dosage</label>
            <textarea id="medicine-dosage" name="medicine_dosage" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" className="fetch-btn" onClick={fetchPrescription}>Fetch Prescription</button>
            <button type="submit" className="ml-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Prescription;
