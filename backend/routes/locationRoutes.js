import express from "express";
import {
  addLikesToLocation,
  getLocation,
} from "../controllers/locationController.js";

const router = express.Router();

router.route("/updateLikes/:locationId").put(addLikesToLocation);
router.route("/:locationId").get(getLocation);

export default router;
