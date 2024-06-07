// controllers/prescriptionController.js

import { Prescription } from '../models/prescriptionSchema.js';
import { User } from '../models/userSchema.js';
// prescriptionController.js

import ErrorHandler from '../middlewares/error.js';

import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js';

// controllers/prescriptionController.js

export const deletePrescription = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const prescription = await Prescription.findById(id);

  if (!prescription) {
    return next(new ErrorHandler('Prescription not found', 404));
  }

  // Remove the prescription ID from the doctor and patient users
  await User.updateMany(
    { _id: { $in: [prescription.doctorName, prescription.patientName] } },
    { $pull: { prescription: prescription._id } }
  );

  // Delete the prescription
  await Prescription.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: 'Prescription deleted successfully',
  });
});


// Controller to create a new prescription
export const createPrescription = catchAsyncErrors(async (req, res, next) => {
    try{
  const { doctorName, patientName, symptoms, diagnosis, treatment, dosage } = req.body;


  if (!doctorName || !patientName || !symptoms || !diagnosis || !treatment || !dosage) {
    return next(new ErrorHandler("Please fill all required fields", 400));
  }
  
  console.log(symptoms);
  console.log(treatment);
  console.log(dosage);
  console.log(diagnosis);

  // Find the doctor and patient by their unique identifiers
  const doctor = await User.findOne({ firstName: doctorName });
  const patient = await User.findOne({ firstName: patientName });
 
  if (!doctor || !patient) {
    return next(new ErrorHandler("Doctor or Patient not found", 404));
  }
 
  // Associate prescription with doctor and patient
  const prescription = await Prescription.create({
    doctorName: doctor._id,
    patientName: patient._id,
    Symptoms:symptoms,
    Diagnosis:diagnosis,
    Treatment:treatment,
    Dosage:dosage,
  });
  
  doctor.prescription.push(prescription._id);
  patient.prescription.push(prescription._id);
  
  await doctor.save();
  await patient.save();

  res.status(201).json({
    success: true,
    message: 'Prescription created successfully',
    prescription,
  });
}
catch(error){
    console.log(error);
}

});
