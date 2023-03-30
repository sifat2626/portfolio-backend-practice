const Contact = require("../models/contact");



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
        const {name,gender,email,mobile,age,address,user} = req.body;
        const contact = await About.findByIdAndUpdate(req.params._id,{
            ...req.body
        });
        await contact.save();

        res.json(contact)
    }catch (error){
        res.json(error)
    }
}