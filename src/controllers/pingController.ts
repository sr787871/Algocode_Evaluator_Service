import { Request , Response } from "express";

export const PingController = (_req : Request, res: Response)=>{
    return res.status(200).json({
        message : "Ping Checks ok"
    });
};