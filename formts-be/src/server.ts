import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { detailsRoutes } from "./routes/details";

const app: Express = express();
app.use(express.json())
dotenv.config();

const port = process.env.PORT || 3003;

app.use('/',detailsRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});