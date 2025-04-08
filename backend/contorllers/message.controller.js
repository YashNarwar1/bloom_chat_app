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
