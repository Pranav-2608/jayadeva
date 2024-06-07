import express from "express";
import { createPrescription } from "../controller/prescriptionController.js";

const router = express.Router();

router.post("/form",createPrescription);

export default router;