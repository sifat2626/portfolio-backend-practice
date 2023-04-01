const Course = require("../models/course");

exports.create = async(req,res)=>{
    try {
        const course = await new Course(req.body).save();
        res.json(course)
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.read = async(req,res)=>{
    try{
        const course = await Course.findById(req.params._id);
        if(!course){
            return res.json({message:"Couldn't find any about info"})
        }else{
            res.send(course);
        }
    }catch(error){
        res.send(error)
    }
}
exports.update = async (req,res) =>{
    try{
        const course = await Course.findByIdAndUpdate(req.params._id,{
            ...req.body
        });
        console.log(course)
        await course.save();

        res.json(course)
    }catch (error){
        res.json(error)
    }
}
exports.remove = async (req,res) =>{
    try{
        const course = await Course.findByIdAndDelete(req.params._id)
        res.json(course)
    }catch (error){
        res.json(error)
    }
}