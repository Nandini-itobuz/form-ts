import express from "express";
import { writeDetails,findDetails, getAllDetails, deleteDetail, updateDetail } from "../controllers/applicationController";

export const applicationRoutes = express.Router();

applicationRoutes.route('/write').post(writeDetails)
applicationRoutes.route('/view/:id').get(findDetails)
applicationRoutes.route('/view-all').get(getAllDetails)
applicationRoutes.route('/delete-form/:id').delete(deleteDetail)
applicationRoutes.route('/update-form/:id').put(updateDetail)
