import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getSocketRecieverId, io } from "../socket/soket.js";

export const sendMessageController = async (req, res) => {
  try {
    const { text } = req.body;
    const senderId = req.user._id;
    const { receiverId } = req.params;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      text,
    });

    conversation.messages.push(newMessage._id);
    await conversation.save();

    const receiverSocketId = getSocketRecieverId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (err) {
    console.log("error in sending messages", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessagesController = async (req, res) => {
  try {
    const { receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (err) {
    console.log("error in getting messages", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const allConversation = async (req, res) => {
  try {
    const userId = req.user._id;

    const conversations = await Conversation.find({
      participants: userId,
    })
      .populate({
        path: "messages",
        options: { sort: { createdAt: -1 }, limit: 1 },
      })
      .populate({
        path: "participants",
        select: "username profilePic", // exclude sensitive info
      })
      .sort({ updatedAt: -1 });

    const result = conversations.map((conv) => {
      const otherUser = conv.participants.find(
        (p) => p._id.toString() !== userId.toString()
      );

      return {
        _id: conv._id,
        user: otherUser,
        lastMessage: conv.messages[0]?.text || "",
        lastMessageAt: conv.messages[0]?.createdAt || conv.updatedAt,
      };
    });

    res.status(200).json(result);
  } catch (error) {
    console.log("Error occurred while getting all conversations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
