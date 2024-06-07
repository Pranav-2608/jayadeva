import express from "express";
import { isPrescription } from "../controller/prescriptionController.js";
import { precriptionByUserId } from "../controller/prescriptionController.js";

const router = express.Router();

router.get("/:id",precriptionByUserId);
router.post("/form",isPrescription);

export default router;
