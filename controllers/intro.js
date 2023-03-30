const Intro = require("../models/intro");

exports.createOrUpdate = async (req,res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}