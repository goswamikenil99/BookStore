import mongoose from "mongoose";
const boookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
});
const Book=mongoose.model("Book",boookSchema);

export default Book;