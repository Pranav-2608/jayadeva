import express from "express";
import { createPrescription } from "../controller/prescriptionController";

const router = express.Router();

router.post("/form",createPrescription);

export default router;
