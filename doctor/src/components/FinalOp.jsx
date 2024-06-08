import React from 'react';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import '../components/FinalOp.css';

const FinalOp = () => {
  const { state } = useLocation();
  const res = state.formValue;
  console.log("This is the objecctt we are talking about",state);
  const generatePdf = () => {
    const input = document.getElementById('pdfContent');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('prescription.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF', error);
      });
  };

  return (
    <div>
      <div id="pdfContent" className="prescription">
        <header>
          <h1>Jayadeva Hospital</h1>
          <p>Address Line 1, Address Line 2, City, State, ZIP</p>
          <p>Phone: (123) 456-7890 | Email: contact@hospital.com</p>
        </header>

        <section className="patient-info">
          <h2>Patient Information</h2>
          <p><strong>Name:</strong> {res?.patientName}</p>
          {/* <p><strong>Age:</strong> {state.age}</p>
          <p><strong>Gender:</strong> {state.gender}</p>
          <p><strong>Address:</strong> {state.address}</p> */}
        </section>

        <section className="prescription-details">
          <h2>Prescription</h2>
          <p><strong>Symptoms:</strong> {res?.symptoms}</p>
          <p><strong>Diagnosis:</strong> {res?.diagnosis}</p>
          <p><strong>Treatment:</strong> {res?.treatment}</p>
          <p><strong>Medicine & Dosage:</strong>{res?.dosage}</p>
        </section>

        <section className="doctor-info">
          <h2>Doctor's Information</h2>
          <p><strong>Doctor's Name:</strong>{res?.doctorName}</p>
          <p><strong>Signature:</strong> ______________________</p>
        </section>
      </div>
      <button onClick={generatePdf} className='border-black text-red-900'>Generate PDF</button>
    </div>
  );
};

export default FinalOp;