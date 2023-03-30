const mongoose = require ("mongoose");
const { ObjectId } = mongoose.Schema;


const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: "user",
        required: true,
    },
},{timestamps:true,versionKey:false});
const Course = mongoose.model("Course",courseSchema );
module.exports = Course;