const Contact = require("../models/contact");


exports.createOrUpdate = async(req,res)=>{
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
}