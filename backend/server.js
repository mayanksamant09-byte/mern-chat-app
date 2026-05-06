import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

// 1. Initialize dotenv immediately
dotenv.config(); 

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js"; // Ensure this import exists

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middlewares
app.use(express.json()); 
app.use(cookieParser());

// 3. Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 4. Start Server and Connect DB
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});