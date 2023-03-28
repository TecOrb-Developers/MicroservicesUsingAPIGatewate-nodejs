import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId:{type:String},
        item:{type:String},
        quantity:{type:String},
        amount:{type:Number},
        shopName:{type:String}
    //orderId 641d365a4fe331e9442079d3
});

export const orderModel = mongoose.model('User_Order',orderSchema)