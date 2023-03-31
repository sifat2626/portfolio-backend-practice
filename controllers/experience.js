const Experience = require("../models/experience");

exports.create = async(req,res)=>{
    try {
        const experience = await new Experience(req.body).save();
        res.json(experience)
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.update = async (req,res) =>{
    try{
        const experience = await Experience.findByIdAndUpdate(req.params._id,{
            ...req.body
        });
        console.log(experience)
        await experience.save();

        res.json(experience)
    }catch (error){
        res.json(error)
    }
}
exports.remove = async (req,res) =>{
    try{
        const experience = await Experience.findByIdAndDelete(req.params._id)
        res.json(experience)
    }catch (error){
        res.json(error)
    }
}