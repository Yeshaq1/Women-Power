import Report from "../models/reportModel.js";
import asyncHandler from "express-async-handler";

// --Desc: Fetch all reports
// --Route: GET /api/reports
// --access: Public Route

const getReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({});

  if (reports) {
    res.json(reports);
  } else {
    res.status(404);
    throw new Error("No Reports Found");
  }
});

// --Desc: Create A Report
// --Route: POST /api/reports
// --access: Public Route

const createReport = asyncHandler(async (req, res) => {
  const {
    name,
    reportContent,
    xCoordinate,
    yCoordinate,
    incidentType,
    location,
  } = req.body;

  const report = new Report({
    name,
    reportContent,
    xCoordinate,
    yCoordinate,
    incidentType,
    location,
  });

  const createdReport = await report.save();

  res.status(201).json(createdReport);
});

// --Desc: Get report by ID
// --Route: GET /api/reports/:id
// --access: Public Route

const getReportById = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id);

  if (report) {
    res.json(report);
  } else {
    res.status(404);
    throw new Error("No Reports Found");
  }
});

export { getReports, createReport, getReportById };
