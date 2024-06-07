import React from "react";
import "./Prescription.css";
import UploadDoc from "./UploadDoc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Prescription = () => {
  const fetchPrescription = () => {
    navigate("/finalop", { state: formValue });
  };

  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    symptoms: "",
    diagnosis: "",
    treatment: "",
    medicineDosage: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const id = e.target.id;
    setFormValue((prev) => ({ ...prev, [id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="h-full flex flex-col mx-auto w-full items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Patient Prescription Form
        </h2>
        <form className="h-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Patient Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="symptoms"
              className="block text-sm font-medium text-gray-700"
            >
              Symptoms
            </label>
            <textarea
              onChange={handleChange}
              id="symptoms"
              name="symptoms"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="diagnosis"
              className="block text-sm font-medium text-gray-700"
            >
              Diagnosis
            </label>
            <textarea
              onChange={handleChange}
              id="diagnosis"
              name="diagnosis"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="treatment"
              className="block text-sm font-medium text-gray-700"
            >
              Treatment
            </label>
            <textarea
              onChange={handleChange}
              id="treatment"
              name="treatment"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="medicineDosage"
              className="block text-sm font-medium text-gray-700"
            >
              Medicine Dosage
            </label>
            <textarea
              onChange={handleChange}
              id="medicineDosage"
              name="medicineDosage"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="fetch-btn"
              onClick={fetchPrescription}
            >
              Fetch Prescription
            </button>
            <button
              type="submit"
              className="ml-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 w-full max-w-lg">
        <UploadDoc />
      </div>
    </div>
  );
};

export default Prescription;
