import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    userId:{type:String},
    token:{type:String},
    timeZone:{type:String},
    deviceType:{type:String},
    language:{type:String},
    currentVersion:{type:String},
    status:{type:Boolean}
});

export const sessionModel = mongoose.model('Session',sessionSchema)