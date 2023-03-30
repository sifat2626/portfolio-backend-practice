const Project = require("../models/project");
exports.create = async (req,res) =>{
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.update = async (req,res) =>{
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.remove = async (req,res) =>{
    try {
        const project = await Project.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: project,
            success: true,
            message: "Project deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
