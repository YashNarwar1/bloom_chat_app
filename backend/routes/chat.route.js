import express from "express";
import {
  allConversation,
  getMessagesController,
  sendMessageController,
} from "../contorllers/message.controller.js";
import protectRoute from "../middleware/authenticateUser.js";

const router = express.Router();

router.get("/get/:receiverId", protectRoute, getMessagesController);
router.post("/send/:receiverId", protectRoute, sendMessageController);
router.get("/conversations", protectRoute, allConversation);

export default router;
