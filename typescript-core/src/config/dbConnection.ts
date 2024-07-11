import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const dbConnection = () => {
	mongoose.connect(process.env.MONGOURL!).
		then(() => console.log('Connected to MongoDB'))
		.catch(err => console.log('Failed to connect to MongoDB:', err));
}