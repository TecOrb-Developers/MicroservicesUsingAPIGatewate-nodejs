import { NextFunction, Request, Response } from "express";
// import { token } from "morgan";
import { sessionModel } from "../model/session";

export const check_auth = async (req: any, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization
        const check = await sessionModel.findOne({ token: token },{userId:1});
        if (check) {
            req.user = check.userId
            next();
        } else {
            return res.send({ code: 403, message: 'Invalid token' });
        }
    } catch (error) {
        console.log(error);
        // return send(404)
    }
}