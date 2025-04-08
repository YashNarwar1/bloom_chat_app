import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import connectToDb from "./db/connectToDb.js";

import authRoutes from "./routes/auth.route.js";
import chatRoutes from "./routes/chat.route.js";
import { app, server } from "./socket/soket.js";

//  Correct way to define __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//  Load env variables early
dotenv.config();

const PORT = process.env.PORT || 5000;

//  Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, "frontend", "dist")));
app.use("/public", express.static(path.join(__dirname, "public"))); // Optional

//  API routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

//  Catch-all for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

//  Connect to DB and start server
connectToDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log(" Server listening on port", PORT);
    });
  })
  .catch((error) => {
    console.error(" Failed to connect to MongoDB:", error);
    process.exit(1);
  });
