import express from "express";
import {
  getReports,
  createReport,
  getReportById,
} from "../controllers/reportController.js";

const router = express.Router();

router.route("/").get(getReports).post(createReport);
router.route("/:id").get(getReportById);

export default router;
