const About = require("../models/about");


exports.create = async(req,res)=>{
    try {
        const about = await new About(req.body).save();
        res.json(about)
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.read = async(req,res)=>{
    try{
        const about = await About.findById(req.params._id);
        if(!about){
            return res.json({message:"Couldn't find any about info"})
        }else{
            res.send(about);
        }
    }catch(error){
        res.send(error)
    }
}
exports.update = async (req,res) =>{
    try{
        const about = await About.findByIdAndUpdate(req.params._id,{
                ...req.body
        })
        await about.save();
        res.json(about)
    }catch (error){
        res.json(error)
    }
}
exports.remove = async (req,res) =>{
    try{
        const about = await About.findByIdAndDelete(req.params._id)
        res.json(about)
    }catch (error){
        res.json(error)
    }
}