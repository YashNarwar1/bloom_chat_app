import express from "express";
import {
  registerController,
  loginController,
  logoutController,
} from "../contorllers/auth.controllers.js";

const router = express.Router();

router.get("/register", registerController);
router.get("/login", loginController);
router.post("/logout", logoutController);

export default router;
