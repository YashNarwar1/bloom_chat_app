import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST"],
  },
});

export const getSocketRecieverId = (recieverId) => {
  return userSocketMap[recieverId];
};

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);

  const userId = socket.handshake.query.userId;
  if (userId && userId !== "undefined") {
    userSocketMap[userId] = socket.id;
    console.log(`User ${userId} connected with socket Id ${socket.id}`);
    io.emit("getOnlineUser", Object.keys(userSocketMap)); // Emit after user is added
  }

  socket.on("sendMessage", ({ recieverId, message }) => {
    const recieverSocketId = userSocketMap[recieverId];
    if (recieverSocketId) {
      io.to(recieverSocketId).emit("receiveMessage", {
        senderId: userId,
        message,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
    if (userId) {
      delete userSocketMap[userId];
      io.emit("getOnlineUser", Object.keys(userSocketMap));
    }
  });
});

export { io, server, app };
