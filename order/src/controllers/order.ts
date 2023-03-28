import express from 'express'
import { Request, Response } from 'express'
import { orderModel } from '../model/order'

// addOrder
export const addOrder = async (req: Request, res: Response) => {
    try {
        const { userId, item, quantity, amount, shopName } = req.body
        if (!userId || !item || !quantity || !amount || !shopName) {
            return res.send({ code: 400, message: 'Invalid Request' });
        }
        const orderDetail = {
            userId,
            item,
            quantity,
            amount,
            shopName
        }
        const createOrder = await orderModel.create(orderDetail);
        return res.send({ createOrder, code: 200, message: "Order created successfully" })
    } catch (error) {
        console.log(error);
        return res.sendStatus(404)
    }
}

//orderDetails
export const orderDetail = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.query;
        const orderDetail = await orderModel.findById({ _id: orderId });
                // const orderDetail = await orderModel.findById({ userId: orderId });

        if (!orderDetail) {
            return res.send({ code: 400, message: 'Order is not exists' });
        } else {
            return res.send({ orderDetail, code: 200, message: 'success' })
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
}

//order_list
export const order_list = async (req: Request, res: Response) => {
    try {
        const order_list = await orderModel.find({});
        if (order_list && order_list.length) {
            return res.send({ order_list, totalOrder: order_list.length, code: 200, message: "success" })
        } else {
            return res.send({ code: 400, message: 'No Data' })
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
}