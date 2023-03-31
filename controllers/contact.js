const Contact = require("../models/contact");
const Experience = require("../models/experience");

exports.create = async(req,res)=>{
    try {
        const contact = await new Contact(req.body).save();
        res.json(contact)
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.update = async (req,res) =>{
    try{
        const contact = await Contact.findByIdAndUpdate(req.params._id,{
            ...req.body
        });
        console.log(contact)
        await contact.save();

        res.json(contact)
    }catch (error){
        res.json(error)
    }
}
exports.remove = async (req,res) =>{
    try{
        const contact = await Experience.findByIdAndDelete(req.params._id)
        res.json(contact)
    }catch (error){
        res.json(error)
    }
}