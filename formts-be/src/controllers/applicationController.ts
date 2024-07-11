import { Request, Response } from "express";
import { JAModel } from "../schemas/applicationSchema";
import { JobApplication } from "../interfaces/jobApplication";

export async function writeDetails(req: Request, res: Response): Promise<void> {
    try {
        const newDetails: JobApplication = await JAModel.create(req.body);
        res.status(200).json({ data: newDetails });
    } catch (err) {
        console.log(err)
    }
}

export async function findDetails(req: Request, res: Response): Promise<void> {
    try {
        const userDetails = await JAModel.findById(req.params.id);
        res.status(200).json({ data: userDetails })
    } catch (err) {
        console.log(err)
    }
}

export async function getAllDetails(req: Request, res: Response): Promise<void> {
    try {
        const userDetails = await JAModel.find();
        res.status(200).json({ data: userDetails })
    } catch (err) {
        console.log(err)
    }
}

export async function deleteDetail(req: Request, res: Response): Promise<void> {
    try {
        const userDetails = await JAModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ data: userDetails })
    } catch (err) {
        console.log(err)
    }
}

export async function updateDetail(req: Request, res: Response): Promise<void> {
    try {
        const userDetails = await JAModel.findByIdAndUpdate(req.params.id, req.body, {
            returnOriginal: false
        });
        console.log(req.params.id)
        res.status(200).json({ data: userDetails })
    } catch (err) {
        console.log(err)
    }
}