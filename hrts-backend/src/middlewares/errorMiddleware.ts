import { Request, Response, NextFunction } from "express";

export default function errorMiddleware(error:any, req:Request, res:Response, next:NextFunction){
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).json(message);
}