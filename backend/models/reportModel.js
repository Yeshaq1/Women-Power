import mongoose from 'mongoose'

const reportSchema = mongoose.Schema(

    {
        name:{
            type: String,
        },
        reportContent:{
            type: String,
            required: true
        },
        xCoordinate:{
            type: Number,
            required: true,
        },
        yCoordinate:{
            type: Number,
            required: true
        },
        incidentType:{
            type: String,
            required: true
        },
        location:{
            type: String,
        },
       
    },

    {
        timestamps: true
    }
)

const Report = mongoose.model("Report", reportSchema);

export default Report;