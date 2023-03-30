const About = require("../models/about");
const User = require("../models/user");

exports.create = async(req,res)=>{
    try {
        const about = await new About(req.body).save();
        res.json(about)
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.update = async (req,res) =>{
    try{
        const {lottieURL,description1,description2,skills,user} = req.body;
        const about = await About.findByIdAndUpdate(req.params._id,{
                ...req.body
        });
        await about.save();
        res.json(about)
    }catch (error){
        res.json(error)
    }
}