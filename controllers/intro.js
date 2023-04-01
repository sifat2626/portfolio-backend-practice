const Intro = require("../models/intro");

exports.create = async(req,res)=>{
    try {
        const intro = await new Intro(req.body).save();
        res.json(intro)
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.read = async(req,res)=>{
    try{
        const intro = await Intro.findById(req.params._id);
        if(!intro){
            return res.json({message:"Couldn't find any about info"})
        }else{
            res.send(intro);
        }
    }catch(error){
        res.send(error)
    }
}
exports.update = async (req,res) =>{
    try{
        const intro = await Intro.findByIdAndUpdate(req.params._id,{
            ...req.body
        });
        console.log(intro)
        await intro.save();

        res.json(intro)
    }catch (error){
        res.json(error)
    }
}
exports.remove = async (req,res) =>{
    try{
        const intro = await Intro.findByIdAndDelete(req.params._id)
        res.json(intro)
    }catch (error){
        res.json(error)
    }
}