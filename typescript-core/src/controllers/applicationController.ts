import { Request, Response } from "express";
import { applicationModel } from "../schemas/applicationSchema";
import { JobApplication } from "../interfaces/jobApplication";
import mongodb from 'mongodb';
import mongoose, { mongo } from "mongoose";


const responseData = (res: Response, success: boolean, status: Number, data: any) => {
    res.status(200).json({ data, status, success });
}

export async function writeDetails(req: Request, res: Response): Promise<void> {
    try {
        const newDetails: JobApplication = await applicationModel.create(req.body);
        console.log(req.body.position)
        responseData(res, true, 202, newDetails)
    } catch (err) {
        console.log(err)
    }
}

export async function findDetails(req: Request, res: Response): Promise<void> {
    try {

        console.log(req.params.id, "params id")
        const data = await applicationModel.findOne({_id : new mongoose.Types.ObjectId(req.params.id)});
        responseData(res, true, 202, data)
    } catch (err) {
        console.log(err)
    }
}

export async function getAllDetails(req: Request, res: Response): Promise<void> {
    try {
        const userDetails = await applicationModel.find();
        responseData(res, true, 202, userDetails)
    } catch (err) {
        console.log(err)
    }
}

export async function deleteDetail(req: Request, res: Response): Promise<void> {
    try {
        const userDetails = await applicationModel.findByIdAndDelete({_id: req.params.id});
        responseData(res, true, 202, userDetails)
    } catch (err) {
        console.log(err)
    }
}

export async function updateDetail(req: Request, res: Response): Promise<void> {
    try {
        const userDetails = await applicationModel.findByIdAndUpdate( {_id: req.params.id}, req.body, {
            returnOriginal: false
        });
        responseData(res, true, 202, userDetails)
    } catch (err) {
        console.log(err)
    }
}