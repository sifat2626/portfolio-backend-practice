const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    caption: {
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
    },
},{timestamps:true,versionKey:false});
const Intro = mongoose.model("Intro", introSchema);
module.exports = Intro;