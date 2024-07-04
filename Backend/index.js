import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from './route/book.route.js'
import userRoute from "./route/user.route.js"
import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI,{
       useNewUrlParser:true,
       useUnifiedTopology:true 
    });
    console.log("Connected!!");
} catch (eror) {
    console.log(`Error:-${eror}`);
}


app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
