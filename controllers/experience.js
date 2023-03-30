const Experience = require("../models/experience");

exports.create = async (req,res) =>{
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.update = async (req,res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.remove = async (req,res) =>{
    try {
        const experience = await Experience.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}