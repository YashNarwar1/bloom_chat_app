import { MicIcon, PaperclipIcon, SendIcon, SmileIcon } from "lucide-react";
import { useState } from "react";
import SendMessage from "../../api/sendMessage.api";

export const MessageInput = () => {
  const [value, setValue] = useState("");
  const { mutate } = SendMessage();

  const handleMessageSend = () => {
    if (value.trim()) {
      mutate({ text: value });
      setValue(""); // Clear input after sending
    }
  };

  return (
    <div className="w-full h-[3.5rem] bg-slate-300 flex items-center px-4">
      <PaperclipIcon className="w-6 h-6 mr-4 text-slate-900 cursor-pointer hover:opacity-80" />
      <SmileIcon className="w-6 h-6 mr-2 text-slate-900 cursor-pointer hover:opacity-80" />
      <input
        type="text"
        placeholder="Type a message"
        className="px-3 w-full h-[2.5rem] border-1 border-slate-500 outline-none mx-3 rounded-lg"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleMessageSend();
        }}
      />
      <MicIcon className="w-5 h-5 mr-3 cursor-pointer hover:opacity-80" />
      <span
        className="w-13 h-10 cursor-pointer bg-green-600 rounded-lg flex items-center justify-center"
        onClick={handleMessageSend}>
        <SendIcon className="w-5 h-5 text-white" />
      </span>
    </div>
  );
};
