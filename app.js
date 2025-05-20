import express from "express";
import cors from "cors";
import hobbyRoute from "./routes/hobbyRoute.js";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
const app = express();
await connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/", hobbyRoute);
app.use(errorHandler);
export default app;
