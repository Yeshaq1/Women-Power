import mongoose from "mongoose";

const locationSchema = mongoose.Schema(
  {
    locationName: {
      type: String,
      required: true,
    },
    googlePlaceId: {
      type: String,
      required: true,
    },
    xCoordinate: {
      type: Number,
      required: true,
    },
    yCoordinate: {
      type: Number,
      required: true,
    },
    numberOfIncidents: {
      type: Number,
      required: true,
      default: 1,
    },
  },

  {
    timestamps: true,
  }
);

const Location = mongoose.model("Location", locationSchema);

export default Location;
