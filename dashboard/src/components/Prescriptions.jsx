import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import "./Prescriptions.css"; // Import the CSS file

const Prescriptions = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/user/doctors", { withCredentials: true });
        console.log(data.doctors);
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response?.data?.message || 'Error fetching doctors');
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page doctors">
      <h1 className="title">All The Prescriptions are here</h1>
      <div className="tbanner">
        {doctors && doctors.length > 0 ? (
          doctors.map((doctor, doctorIndex) => (
            <div key={doctorIndex} className="doctor-card">
              <h2 className="doctor-name">Dr. {doctor.firstName} {doctor.lastName}</h2>
              {doctor.prescription && doctor.prescription.length > 0 ? (
                doctor.prescription.map((prescription, prescriptionIndex) => (
                  <div key={prescriptionIndex} className="prescription-card">
                    <div className="details">
                      <p><strong>Symptoms:</strong> {prescription?.Symptoms}</p>
                      <p><strong>Treatment:</strong> {prescription?.Treatment}</p>
                      <p><strong>Diagnosis:</strong> {prescription?.Diagnosis}</p>
                      <p><strong>Dosage:</strong> {prescription?.Dosage}</p>
                      <p><strong>Patient:</strong> Mr. {prescription?.patientName} </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-prescription">No prescriptions found for this doctor.</p>
              )}
            </div>
          ))
        ) : (
          <h1 className="no-doctors">No Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Prescriptions;
