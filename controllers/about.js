const About = require("../models/about");

exports.createOrUpdate = async(req,res)=>{
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "Abouts updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}