import React from 'react'
import axios from "axios";
import  { useState, useEffect} from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";


const Consultations = async() => {

    const { id } = useParams();
    const [prescriptions, setPrescriptions] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        fetchPrescriptions();
    }, [id]);
  
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1.prescriptions/${id}`);
        setPrescriptions(response.data.prescriptions);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch prescriptions. Please try again.");
        setLoading(false);
      }
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div>
      <h2>Your Prescriptions</h2>
      {prescriptions.length > 0 ? (
        <ul>
          {prescriptions.map((prescription) => (
            <li key={prescription._id}>
              <strong>Doctor:</strong> {prescription.DoctorName.firstName} {prescription.DoctorName.lastName} <br />
              <strong>Patient:</strong> {prescription.PatientName.firstName} {prescription.PatientName.lastName} <br />
              <strong>Symptoms:</strong> {prescription.Symptoms} <br />
              <strong>Diagnosis:</strong> {prescription.Diagnosis} <br />
              <strong>Treatment:</strong> {prescription.Treatment} <br />
              <strong>Dosage:</strong> {prescription.Dosage} <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>No prescriptions found.</p>
      )}
    </div>
  );
};


export default Consultations