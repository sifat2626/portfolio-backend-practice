const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const aboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String,
        required: true,
    },
    description1: {
        type: String,
        required: true,
    },
    description2: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: "user",
        required: true,
        unique:true
    },
},{timestamps:true,versionKey:false});
const About = mongoose.model("About", aboutSchema);
module.exports = About;