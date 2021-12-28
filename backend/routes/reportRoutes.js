import express from "express";
import { checkAndCreateLocation } from "../controllers/locationController.js";
import {
  getReports,
  createReport,
  getReportById,
  getReportsByLocation,
} from "../controllers/reportController.js";

const router = express.Router();

router.route("/").get(getReports).post(checkAndCreateLocation, createReport);
router.route("/:id").get(getReportById);
router.route("/bylocation").post(getReportsByLocation);

export default router;
