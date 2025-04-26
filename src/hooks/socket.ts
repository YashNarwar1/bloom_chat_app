import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Message } from "../store/chat.store";

export const useSocket = (userId: string) => {
  const socket = useRef<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  useEffect(() => {
    socket.current = io("http://localhost:5000"); // your backend URL
    socket.current.emit("addUser", userId);

    socket.current.on("getOnlineUsers", (users: string[]) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [userId]);

  const sendMessage = (msg: Message) => {
    socket.current?.emit("sendMessage", msg);
  };

  return {
    socket: socket.current,
    sendMessage,
    onlineUsers,
  };
};
