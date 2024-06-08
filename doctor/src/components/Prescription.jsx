import React, { useState } from "react";
import "./Prescription.css";
import axios from "axios";
import UploadDoc from "./UploadDoc";
import { useNavigate } from "react-router-dom";

const Prescription = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    patientName: "",
    doctorName: "",
    symptoms: "",
    diagnosis: "",
    treatment: "",
    dosage: "",
  });

  const handleClick = (e)=>{
     e.preventDefault();
     navigate('/finalop', { state: { formValue } });
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValue((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.post(
        "http://localhost:4000/api/v1/prescriptions/form",
        formValue,
        {
          // Optionally, include additional configurations such as headers
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful response
      console.log(response.data); // Log the response data
      alert("Prescription submitted successfully!");
    } catch (error) {
      // Handle error
      console.error("Error submitting prescription:", error);
      alert("Failed to submit the prescription. Please try again.");
    }
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
              htmlFor="patientName"
              className="block text-sm font-medium text-gray-700"
            >
              Patient Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="patientName"
              name="patientName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="doctorName"
              className="block text-sm font-medium text-gray-700"
            >
              Doctor Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="doctorName"
              name="doctorName"
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
              htmlFor="dosage"
              className="block text-sm font-medium text-gray-700"
            >
              Medicine Dosage
            </label>
            <textarea
              onChange={handleChange}
              id="dosage"
              name="dosage"
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="flex justify-end gap-2">
          <button
              type="submit"
              className="ml-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleClick}
            >
              Fetch Report
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
      <div className="mt-8 w-full max">
        <UploadDoc />
      </div>
    </div>
  );
};

export default Prescription;
