import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToDb from "./db/connectToDb.js";

import authRoutes from "./routes/auth.route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

connectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Listening on port", PORT);
    });
  })
  .catch((error) => {
    console.log("Error in connecting the mongo database", error);
    process.exit(1);
  });
