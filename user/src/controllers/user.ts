import express from 'express'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { userModel } from '../model/user'
import { sessionModel } from '../model/session'
import crypto from 'crypto'
import request from 'request'
import axios from 'axios'
// register
export const register = async (req: Request, res: Response) => {
    try {
        const { email, userName, password } = req.body;
        const { deviceType, timeZone, language, currentVersion } = req.headers
        const check_user = await userModel.findOne({ email: email });
        const token: any = crypto.randomBytes(48).toString('hex');
        if (check_user) {
            return res.send({ code: 403, message: 'already exists' });
        } else {
            const obj: any = {
                email,
                userName
            }
            var pass = bcrypt.hashSync(password, 10);
            obj.password = pass;
            const userData: any = await userModel.create(obj);
            if (userData) {
                const obj1 = {
                    userId: userData._id,
                    token: token,
                    deviceId: deviceType,
                    status: true,
                    timeZone: timeZone,
                    language: language,
                    currentVersion: currentVersion
                }
                await sessionModel.create(obj1)
                const obj2 = {
                    email,
                    userName: userName,
                    token,
                    _id: userData._id
                }
                return res.send({ obj2, code: 200, message: 'success' }).end();
            }
        }
    } catch (error) {
        console.log(error)
        return res.sendStatus(404);
    }
}

//login
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.send({ code: 403, message: 'Invalid request' });
        }
        const userData: any = await userModel.findOne({ email });
        if (userData) {
            const token: any = crypto.randomBytes(48).toString('hex');
            const { deviceType, timeZone, language, currentVersion } = req.headers
            var pass: any = bcrypt.compareSync(password, userData.password);
            if (pass == true) {
                const obj1 = {
                    userId: userData._id,
                    token: token,
                    deviceId: deviceType,
                    status: true,
                    timeZone: timeZone,
                    language: language,
                    currentVersion: currentVersion
                }
                await sessionModel.create(obj1)
                const obj2 = {
                    email,
                    userName: userData.userName,
                    token,
                    _id: userData._id
                }
                return res.send({ obj2, code: 200, message: 'Login successfully' })
            } else {
                return res.send({ code: 400, message: 'Wrong Pasword' })
            }
        } else {
            return res.send({ code: 400, message: 'Not Found' })
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
}

export const userDetails = async (req: any, res: Response) => {
    try {
        const userId = req.user
        const base_url = 'http://localhost:9000/Order/order/details?orderId=' + userId
        // console.log(base_url)
        const response = await axios.get(base_url);
        console.log("response------------------------",response)
        const details = await userModel.findById({ _id: userId }, { userName: 1, email: 1 });
        // request.get(base_url,
        //     function (err: any, body: any, res: any) {
        //         console.log(res, "w,ekke")
        //     })
        return res.send({ details, code: 200, message: 'Record fetch successfully' })
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
}
