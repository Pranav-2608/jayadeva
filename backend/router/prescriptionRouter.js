import express from "express";
import { isPrescription } from "../controller/prescriptionController.js";
import { precriptionByUserId } from "../controller/prescriptionController.js";
import { isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/:id",isPatientAuthenticated,precriptionByUserId);
router.post("/form",isPatientAuthenticated,isPrescription);

export default router;
