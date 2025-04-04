import {
  MessageCircleDashed,
  MicIcon,
  PaperclipIcon,
  SendIcon,
  SmileIcon,
} from "lucide-react";
import { useState } from "react";

import { ChatAreaNavbar } from "./chatAreaNavbar";
import ChatStore from "../store/chat.store";

export const MessageArea = () => {
  const { recipient } = ChatStore();

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleMessageSend = () => {
    if (value.trim() !== "") {
      setMessages((prev) => [...prev, value]);
      setValue("");
    }
  };

  if (recipient.username !== "") {
    return (
      <div className="w-full h-full flex flex-col">
        <ChatAreaNavbar user={recipient} />
        <div className="w-full h-[38rem] bg-[url('/assets/back.jpg')]  backdrop-blur-3xl flex flex-col-reverse overflow-y-auto p-4">
          <div className="flex flex-col w-full px-4 justify-end">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex justify-end mb-2">
                <div className="p-3 max-w-xs text-white bg-green-500 rounded-lg rounded-br-none">
                  {msg}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-start">
            <div className="p-3 max-w-xs bg-gray-300 text-black rounded-lg rounded-bl-none">
              Hello!
              {/* her goes message from the recipient */}
            </div>
          </div>
        </div>
        <div className="w-full h-[3.5rem] bg-slate-300 flex items-center px-4">
          <PaperclipIcon className="w-6 h-6 mr-4 text-slate-900 cursor-pointer hover:opacity-80" />
          <SmileIcon className="w-6 h-6 mr-2 text-slate-900 cursor-pointer hover:opacity-80" />
          <input
            type="text"
            placeholder="Type a message"
            className="px-3 w-full h-[2.5rem] border-1 border-slate-500  outline-none mx-3 rounded-lg "
            value={value}
            onChange={handleValueChange}
          />
          <MicIcon className="w-5 h-5 mr-3  cursor-pointer hover:opacity-80" />
          <span className="w-13 h-10 cursor-pointer  bg-green-600 rounded-lg flex items-center justify-center ">
            <SendIcon
              onClick={() => handleMessageSend()}
              className="w-5 h-5  cursor-pointer hover:opacity-80"
            />
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full bg-black/45 flex flex-col gap-2 items-center justify-center ">
        <MessageCircleDashed className="w-20 h-20" />
        <h1 className="text-2xl font-bold ">Welcome to Bloom Chat</h1>
        <p className="text-md text-slate-300 w-[30rem] text-center">
          Select a chat to start messaging, messages are end to end encrypted so
          share your private conversation with ease
        </p>
      </div>
    );
  }
};
