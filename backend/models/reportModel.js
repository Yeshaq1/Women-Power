import mongoose from "mongoose";

const reportSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    reportContent: {
      type: String,
      required: true,
    },
    incidentType: {
      type: String,
      required: true,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Location",
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

const Report = mongoose.model("Report", reportSchema);

export default Report;
