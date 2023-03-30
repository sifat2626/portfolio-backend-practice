const Course = require("../models/course");

exports.create = async (req,res) =>{
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(200).send({
            data: course,
            success: true,
            message: "Course added successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.update = async(req,res) =>{
    try {
        const course = await Course.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: course,
            success: true,
            message: "Course updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.remove = async (req,res) => {
    try {
        const course = await Course.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: course,
            success: true,
            message: "Course deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}