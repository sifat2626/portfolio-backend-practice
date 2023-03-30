const mongoose = require ("mongoose");
const { ObjectId } = mongoose.Schema;

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: "user",
        required: true,
    },
},{timestamps:true,versionKey:false});
const Contact = mongoose.model("Contact",contactSchema );
module.exports = Contact;