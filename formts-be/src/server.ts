import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { applicationRoutes } from "./routes/applicationRoutes";
import cors from 'cors'

const app: Express = express();
app.use(cors())
app.use(express.json())
dotenv.config();

const port = process.env.PORT || 3006;

mongoose.connect('mongodb+srv://nandini:Nandini2377@cluster0.gjoswhn.mongodb.net/').
then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB:', err));

app.use('/',applicationRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});