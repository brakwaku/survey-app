import mongoose from "mongoose";

const surveySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    country: {
        type: String
    },
    experience: {
        type: Number
    },
    suggestion: {
        type: String
    },
    pageToEdit: {
        type: String
    },
}, {
    timestamps: true
});

const Survey = mongoose.model('Survey', surveySchema);

export default Survey;