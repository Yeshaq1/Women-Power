import Location from "../models/locationModel.js";
import asyncHandler from "express-async-handler";
import Report from "../models/reportModel.js";

const checkAndCreateLocation = asyncHandler(async (req, res, next) => {
  const { locationName, xCoordinate, yCoordinate, googleId, typeOfLocation } =
    req.body;

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
      typeOfLocation,
    });

    const createdLocation = await location.save();
    req.location = createdLocation._id;
    next();
  }
});

const addLikesToLocation = asyncHandler(async (req, res) => {
  const updatedLocationData = await Location.findByIdAndUpdate(
    { _id: req.params.locationId },
    { $inc: { numberOfLikes: 1 } }
  );
  res.status(200).json(updatedLocationData);
});

const getLocation = asyncHandler(async (req, res) => {
  const location = await Location.findById(req.params.locationId);

  if (location) {
    res.status(200).json(location);
  } else {
    throw new Error("No Location Found");
  }
});

export { checkAndCreateLocation, addLikesToLocation, getLocation };
