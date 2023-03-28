import express from 'express'
import { Request, Response } from 'express'
import { orderModel } from '../model/order'
import { addOrder, orderDetail, order_list } from '../controllers/order'

export default (router: express.Router) => {
    router.post('/order/add', addOrder);
    router.get('/order/details',orderDetail);
    router.get('/order/order_list',order_list)
}