import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Prescription } from "../models/prescriptionSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/jwtToken.js";
import { User } from "../models/userSchema.js";

export const isPrescription = catchAsyncErrors(async (req, res, next) => {
  const { DoctorName,PatientName,Symptoms,Diagnosis,Treatment,Dosage } = req.body;
  const email = req.user.email;
  if (
    !DoctorName || !PatientName || !Symptoms || !Diagnosis || !Treatment || !Dosage
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ email });
  if (!isRegistered) {
    return next(new ErrorHandler("User not registered", 400));
  }

  const prescribe = await Prescription.create({
    DoctorName,PatientName,Symptoms,Diagnosis,Treatment,Dosage ,role:"Patient"  
  });

  return res.status(200).json({
    success: true,
    message: "Message Sent!",
    prescribe
  });

  
});

export const precriptionByUserId = catchAsyncErrors(async (req, res, next) => {
  const userId = req.params.id; 

  const prescriptions = await Prescription.findById(userId); 

  if (!prescriptions) {
    return next(new ErrorHandler("No messages found for this user ID", 404));
  }

  res.status(200).json({
    success: true,
    messages,
  });
});

