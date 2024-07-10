import { Request, Response } from "express";
import { JAModel } from "../schemas/applicationSchema";
import { JobApplication } from "../interfaces/jobApplication";

export async function writeDetails(req: Request, res: Response): Promise<void> {
    try {
        console.log(req.body)
        const newDetails: JobApplication = await JAModel.create(req.body);
        res.status(200).json({ data: newDetails });
    } catch (err) {
        console.log(err)
    }
}

export async function findDetails(req: Request, res: Response): Promise<void> {
    try {
        const userDetails = await JAModel.findById(req.body.id);
        res.status(200).json({ data: userDetails })
    } catch (err) {
        console.log(err)
    }
}
