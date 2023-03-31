const About = require("../models/about");
const Contact = require("../models/contact");
const Course = require("../models/course");
const Experience = require("../models/experience");
const Intro = require("../models/intro");
const Project = require("../models/project");
const User = require("../models/user");
exports.create = async (req,res) =>{
    try{
        const {username} = req.body;
        const {password} = req.body;
        if(!username || !password){
            return res.error("Invalid input");
        }
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.json("username already exists");
        }
        const user = await new User({username,password}).save();
        res.json(user)
    }catch(error){
        res.json(error)
    }
}
exports.userInfo = async (req,res)=>{
    try{
        const {username} = req.body;
        const user = await User.findOne({username}).select("-password");
        const about = await About.findOne({user:user._id});
        const contact = await Contact.findOne({user:user._id});
        const course = await Course.findOne({user:user._id});
        const experience = await Experience.findOne({user:user._id});
        const intro = await Intro.findOne({user:user._id});
        const project = await Project.findOne({user:user._id});
        if (user) {
            res.status(200).send({
                user,
                about,
                contact,
                course,
                experience,
                intro,
                project
            });
        }else{
            res.json({message:"no user found"})
        }
    }catch(error){
        res.json({message:error})
    }
}
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        }).select("-password");
        if(!user){
            return res.status(401).send("User Unauthorized")
        }else{
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
