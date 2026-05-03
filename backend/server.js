import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Load the environment variables once
dotenv.config();

const app = express();

// Your console log to test if it's working
// console.log("MONGO_URI: ", process.env.MONGO_URI);

// The rest of your imports...
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";