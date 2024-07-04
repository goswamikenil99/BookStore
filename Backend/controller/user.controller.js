import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    var { fullname, email, mobile, password } = req.body;
    const user =await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }
    // const hasPassword= await bcryptjs.hash(password,10);
    const createdUser = new User({
      fullname,
      email,
      mobile,
      password,
    });
    await createdUser.save();
    res.status(201).json({ message: "user created Successfully" , user:{
      fullname:createdUser.fullname,
      email:createdUser.email,
      mobile:createdUser.mobile
    }});
  } catch (error) {
    console.log(`Error:-${error}`);
    res.status(500).json(error);
  }
};
export const login = async (req, res) => {
  try {
    var { fullname, email, password } = req.body;
    const user =await User.findOne({ email });
    if(!user || (password!=user.password)){
      return res.status(400).json({ message: "Invalid user Name or Password" });
    }
    else{
      res.status(200).json({
        message:"Login SuccessFully",
        user:{
          _id:user._id,
          fullname:user.fullname,
          email:user.email,
        }
      });
    }
  } catch (error) {
    console.log(`Error:-${error}`);
    res.status(500).json(error);
  }
};
