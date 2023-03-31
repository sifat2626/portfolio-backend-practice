const Intro = require("../models/intro");


exports.create = async(req,res)=>{
    try {
        const intro = await new Intro(req.body).save();
        res.json(intro)
    } catch (error) {
        res.status(500).send(error);
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