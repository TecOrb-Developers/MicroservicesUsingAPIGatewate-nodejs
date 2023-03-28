import mongoose from "mongoose";
import user from "../routes/user";

const userSchema = new mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});



export const userModel = mongoose.model('User',userSchema);
// export const getUsers = () =>userModel.find();
// export const getUserByEmail = (email:string) =>userModel.findOne({email});