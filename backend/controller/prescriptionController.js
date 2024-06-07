// controllers/prescriptionController.js
import { Prescription } from '../models/prescriptionSchema.js';
import { User } from '../models/userSchema.js';
import ErrorHandler from '../middlewares/error.js';
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js';

// Controller to create a new prescription
export const createPrescription = catchAsyncErrors(async (req, res, next) => {
  const { doctorName, patientName, symptoms, diagnosis, treatment, dosage } = req.body;

  if (!doctorName || !patientName || !symptoms || !diagnosis || !treatment || !dosage) {
    return next(new ErrorHandler("Please fill all required fields", 400));
  }

  // Optionally, you can validate if doctorName and patientName are valid users
  const doctor = await User.findById(doctorName);
  const patient = await User.findById(patientName);

  if (!doctor || !patient) {
    return next(new ErrorHandler("Doctor or Patient not found", 404));
  }

  const prescription = await Prescription.create({
    doctorName,
    patientName,
    symptoms,
    diagnosis,
    treatment,
    dosage,
  });

  res.status(201).json({
    success: true,
    message: 'Prescription created successfully',
    prescription,
  });
});
