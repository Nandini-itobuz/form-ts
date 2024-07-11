import express from "express";
import { writeDetails, findDetails, getAllDetails, deleteDetail, updateDetail } from "../controllers/applicationController";

export const applicationRoutes = express.Router();

applicationRoutes.route('/create-application').post(writeDetails)
applicationRoutes.route('/view-application/:id').get(findDetails)
applicationRoutes.route('/view-applications').get(getAllDetails)
applicationRoutes.route('/delete-application/:id').delete(deleteDetail)
applicationRoutes.route('/update-application/:id').put(updateDetail)
