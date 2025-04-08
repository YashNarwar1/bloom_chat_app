import express from "express";
import {
  getMessagesController,
  sendMessageController,
} from "../contorllers/message.controller.js";
import protectRoute from "../middleware/authenticateUser.js";

const router = express.Router();

router.get("/get/:receiverId", protectRoute, getMessagesController);
router.post("/send/:receiverId", protectRoute, sendMessageController);

export default router;
