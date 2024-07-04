import mongoose from "mongoose";
const userkSchema=mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    mobile:{
        type:Number,
        require:false
    },
    password:{
        type:String,
        require:true
    }
});
const User=mongoose.model("User",userkSchema);

export default User;