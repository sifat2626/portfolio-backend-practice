const Project = require("../models/project");
const User = require("../models/userModel");
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