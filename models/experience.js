const mongoose = require ("mongoose");
const { ObjectId } = mongoose.Schema;

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: "user",
        required: true,
        unique:true
    },
},{timestamps:true,versionKey:false});
const Experience = mongoose.model("Experience",experienceSchema );
module.exports = Experience;