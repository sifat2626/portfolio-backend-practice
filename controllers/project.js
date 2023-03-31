const Project = require("../models/project");

exports.create = async(req,res)=>{
    try {
        const project = await new Project(req.body).save();
        res.json(project)
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.update = async (req,res) =>{
    try{
        const project = await Project.findByIdAndUpdate(req.params._id,{
            ...req.body
        });
        console.log(project)
        await project.save();

        res.json(project)
    }catch (error){
        res.json(error)
    }
}
exports.remove = async (req,res) =>{
    try{
        const project = await Project.findByIdAndDelete(req.params._id)
        res.json(project)
    }catch (error){
        res.json(error)
    }
}
