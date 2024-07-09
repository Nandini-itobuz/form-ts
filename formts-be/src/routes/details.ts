import express from "express";
import { fetchCustomerDetails } from "../controllers/details";
export const detailsRoutes = express.Router();

detailsRoutes.route('/get-details').post(fetchCustomerDetails);