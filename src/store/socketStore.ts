// src/store/socketStore.ts
import { create } from "zustand";
import { io, Socket } from "socket.io-client";

// Types
interface Message {
  senderId: string;
  recieverId?: string;
  text: string;
}

interface SocketStore {
  socket: Socket | null;
  onlineUsers: string[];
  messages: Message[];

  connectSocket: (userId: string) => void;
  sendMessage: (params: Message) => void;
}

// Socket instance (shared)
const socket: Socket = io("http://localhost:5000", {
  autoConnect: false,
  transports: ["websocket"],
});

export const useSocketStore = create<SocketStore>((set, get) => ({
  socket: null,
  onlineUsers: [],
  messages: [],

  connectSocket: (userId: string) => {
    if (!socket.connected) {
      socket.io.opts.query = { userId };
      socket.connect();
      set({ socket });

      socket.on("getOnlineUser", (users: string[]) => {
        set({ onlineUsers: users });
      });

      socket.on("receiveMessage", (msg: Message) => {
        set((state) => ({
          messages: [...state.messages, msg],
        }));
      });

      socket.on("newMessage", (msg: Message) => {
        set((state) => ({
          messages: [...state.messages, msg],
        }));
      });
    }
  },

  sendMessage: ({ recieverId, text, senderId }: Message) => {
    socket.emit("sendMessage", { recieverId, text });
    set((state) => ({
      messages: [...state.messages, { senderId, recieverId, text }],
    }));
  },
}));
