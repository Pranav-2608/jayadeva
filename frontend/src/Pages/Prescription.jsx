import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import './Prescription.css'

const Prescriptions = () => {
  const [patient, setPatient] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/user/user/patients", { withCredentials: true });
        console.log(data?.patients);
        setPatient(data?.patients);
      } catch (error) {
        toast.error(error.response?.data?.message || 'Error fetching Patients');
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="container form-component login-form">
    <section className="page doctors">
      <h1 className="title">All The Prescriptions are here</h1>
      <div className="banner">
        {patient && patient.length > 0 ? (
          patient.map((pat, doctorIndex) => (
            <div key={doctorIndex} className="doctor-card">
              <h2 className="doctor-name"> {pat.firstName} {pat.lastName}</h2>
              {pat.prescription && pat.prescription.length > 0 ? (
                pat.prescription.map((prescription, prescriptionIndex) => (
                  <div key={prescriptionIndex} className="prescription-card">
                    <div className="details">
                      <p><strong>Symptoms:</strong> {prescription?.Symptoms}</p>
                      <p><strong>Treatment:</strong> {prescription?.Treatment}</p>
                      <p><strong>Diagnosis:</strong> {prescription?.Diagnosis}</p>
                      <p><strong>Dosage:</strong> {prescription?.Dosage}</p>
                      <p><strong>Doctor:</strong> {prescription?.patientName?.firstName} {prescription?.patientName?.lastName}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-prescription">No prescriptions found for this Patient.</p>
              )}
            </div>
          ))
        ) : (
          <h1 className="no-doctors">No Doctors Found!</h1>
        )}
      </div>
    </section>
    </div>
  );
};

export default Prescriptions;
