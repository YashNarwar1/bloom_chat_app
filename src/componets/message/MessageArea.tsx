import { useEffect, useRef } from "react";
import { ChatAreaNavbar } from "../chatAreaNavbar";
import { MessageCircleDashed } from "lucide-react";
import { Message, useConversation } from "../../store/chat.store";
import { MessageInput } from "./messageInput";
import GetMessage from "../../api/getMessage.api";
import GetUser from "../../api/getUser.api";

export const MessageArea = () => {
  const { recipient } = useConversation();
  const lastMsgRef = useRef<HTMLDivElement | null>(null);
  const { data: messages = [], refetch } = GetMessage(recipient._id);

  const { data: user } = GetUser();

  const currentUserId = user?._id;
  console.log(user);

  useEffect(() => {
    if (lastMsgRef.current) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (recipient._id) {
      refetch();
    }
  }, [recipient._id, refetch]);

  if (!recipient._id) {
    return (
      <div className="w-full h-full bg-black/45 flex flex-col gap-2 items-center justify-center">
        <MessageCircleDashed className="w-20 h-20" />
        <h1 className="text-2xl font-bold">Welcome to Bloom Chat</h1>
        <p className="text-md text-slate-300 w-[30rem] text-center">
          Select a chat to start messaging. Messages are end-to-end encrypted so
          share your private conversation with ease.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full  h-screen flex flex-col">
      <ChatAreaNavbar />
      <div className="w-full h-full overflow-hidden bg-[url('/assets/back.jpg')] backdrop-blur-3xl flex flex-col-reverse overflow-y-auto p-4">
        <div className="flex flex-col w-full px-4 justify-end">
          {messages.map((msg: Message, idx: number) => {
            const isLast = idx === messages.length - 1;
            const isSender = msg.senderId === currentUserId;

            return (
              <div
                key={idx}
                ref={isLast ? lastMsgRef : null}
                className={`flex mb-2 ${
                  isSender ? "justify-end" : "justify-start"
                }`}>
                <div
                  className={`p-3 max-w-xs rounded-lg ${
                    isSender
                      ? "bg-green-500 text-white rounded-br-none"
                      : "bg-gray-200 text-black rounded-bl-none"
                  }`}>
                  {msg.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MessageInput />
    </div>
  );
};
