import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Prescriptions = () => {
  const [patientPrescriptions, setPatientPrescriptions] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchPrescriptions = async () => {

            try {
              const userId = Cookies.get('userId');
              const response = await axios.get(`http://localhost:4000/api/v1/user/patient/${userId}`, { withCredentials: true });
              console.log(response); // Log the entire response object
              setPatientPrescriptions(response.data?.prescriptions);
            } catch (error) {
              toast.error(error.response?.data?.message || 'Error fetching Prescriptions');
            }
          };
          
    

    // Fetch prescriptions only if user is authenticated
    if (isAuthenticated) {
      fetchPrescriptions();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="container form-component login-form">
      <section className="page doctors">
        <h1 className="title">All The Prescriptions are here</h1>
        <div className="banner">
          {patientPrescriptions && patientPrescriptions.length > 0 ? (
            patientPrescriptions.map((prescription, index) => (
              <div key={index} className="prescription-card">
                <div className="details">
                  <p><strong>Symptoms:</strong> {prescription?.Symptoms}</p>
                  <p><strong>Treatment:</strong> {prescription?.Treatment}</p>
                  <p><strong>Diagnosis:</strong> {prescription?.Diagnosis}</p>
                  <p><strong>Dosage:</strong> {prescription?.Dosage}</p>
                  <p><strong>Doctor:</strong> {prescription?.doctorName?.firstName} {prescription?.doctorName?.lastName}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-prescription">No prescriptions found for this Patient.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Prescriptions;
