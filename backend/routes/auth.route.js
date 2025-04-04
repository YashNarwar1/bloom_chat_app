import express from "express";

import {
  registerController,
  loginController,
  logoutController,
  getUser,
  getAlUsers,
} from "../contorllers/auth.controllers.js";
import protectRoute from "../middleware/authenticateUser.js";

const router = express.Router();

router.get("/get", protectRoute, getUser);
router.get("/getAll", protectRoute, getAlUsers);
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

export default router;
