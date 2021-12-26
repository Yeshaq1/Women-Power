import Location from "../models/locationModel.js";
import asyncHandler from "express-async-handler";

const checkAndCreateLocation = asyncHandler(async (req, res, next) => {
  const { locationName, xCoordinate, yCoordinate, googleId } = req.body;

  const locationFound = await Location.findOneAndUpdate(
    { googlePlaceId: googleId },
    { $inc: { numberOfIncidents: 1 } }
  );

  if (locationFound) {
    req.location = locationFound._id;
    next();
  } else {
    const location = new Location({
      locationName,
      googlePlaceId: googleId,
      xCoordinate,
      yCoordinate,
    });

    const createdLocation = await location.save();
    req.location = createdLocation._id;
    next();
  }
});

export default checkAndCreateLocation;
