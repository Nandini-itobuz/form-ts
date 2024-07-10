import express from "express";
import { writeDetails,findDetails } from "../controllers/applicationController";

export const applicationRoutes = express.Router();


applicationRoutes.route('/write').post(writeDetails)
applicationRoutes.route('/view').get(findDetails)