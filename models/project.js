const mongoose = require ("mongoose");
const { ObjectId } = mongoose.Schema;

const projectSchema = new mongoose.Schema({
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
    technologies: {
        type: Array,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: "user",
        required: true,
    },
},{timestamps:true,versionKey:false});

const Project = mongoose.model("Project",projectSchema );
module.exports = Project;