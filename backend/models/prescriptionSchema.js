import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const prescriptionSchema = new mongoose.Schema({
  DoctorName: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  PatientName: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  Symptoms: {
    type: String,
    required: true,
  },
  Diagnosis: {
    type: String,
    required:true,
  },
  Treatment: {
    type: String,
    required: true,
  },
  Dosage:{
    type:String,
    required:true,
  },
});


prescriptionSchema.post('save',async(doc)=>{
  console.log(doc)
})

export const Prescription = mongoose.model("Prescription", prescriptionSchema);