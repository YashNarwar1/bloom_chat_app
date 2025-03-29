import {
  InfoIcon,
  MenuIcon,
  MessageCircleDashed,
  MicIcon,
  PaperclipIcon,
  PhoneCallIcon,
  SendIcon,
  SmileIcon,
  VideoIcon,
} from "lucide-react";
import { useState } from "react";
import { ChatAreaNavbar } from "./chatAreaNavbar";

export const MessageArea = () => {
  const user = {
    name: "yash",
    status: "online",
  };

  const [value, setValue] = useState("");

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  if (user) {
    return (
      <div className="w-full h-full flex flex-col">
        <ChatAreaNavbar />
        <div className="w-full h-[38rem] bg-[url('/assets/back.jpg')]  backdrop-blur-3xl flex flex-col-reverse overflow-y-auto p-4">
          <div className="flex justify-end">
            <div className="p-3 max-w-xs text-white bg-green-500 rounded-lg rounded-br-none">
              Hello!
            </div>
          </div>
          <div className="flex justify-start">
            <div className="p-3 max-w-xs bg-gray-300 text-black rounded-lg rounded-bl-none">
              {value}
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
              onClick={(e) => handleValueChange}
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
