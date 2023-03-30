const Project = require("../models/project");
const User = require("../models/user");
exports.createUser = async (req,res) =>{
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
        const user = await User.findOne({username});
        if (user) {
            res.status(200).send({
                data: user,
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
        });
        user.password = "";
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login successfully",
            });
        } else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid username or password",
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
