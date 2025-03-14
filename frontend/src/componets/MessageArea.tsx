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

export const MessageArea = () => {
  const user = {
    name: "yash",
    status: "online",
  };

  if (user) {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[4rem] flex items-center justify-between bg-black/70 px-4">
          <div className="flex items-center ">
            <p className="w-[3rem] h-[3rem] rounded-full bg-slate-300 flex items-center justify-center ml-4">
              YN
            </p>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold ml-4 text-slate-300">
                Username
              </h1>
              <p className="text-sm ml-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                {user.status}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <PhoneCallIcon className="w-5 h-5 text-slate-300" />
            <VideoIcon className="w-5 h-5 text-slate-300" />
            <InfoIcon className="w-5 h-5 text-slate-300" />
            <MenuIcon className="w-5 h-5 text-slate-300" />
          </div>
        </div>
        <div className="w-full h-[38rem] bg-[url('/assets/back.jpg')] flex flex-col-reverse overflow-y-auto p-4">
          <div className="flex justify-end">
            <div className="p-3 max-w-xs text-white bg-green-500 rounded-lg rounded-br-none">
              Hello!
            </div>
          </div>
          <div className="flex justify-start">
            <div className="p-3 max-w-xs bg-gray-300 text-black rounded-lg rounded-bl-none">
              Hey there!
            </div>
          </div>
        </div>
        <div className="w-full h-[3.5rem] bg-slate-300 flex items-center px-4">
          <PaperclipIcon className="w-5 h-5 ml-4 text-slate-900" />
          <SmileIcon className="w-5 h-5 ml-4 text-slate-900" />
          <input
            type="text"
            placeholder="Type a message"
            className="px-3 w-full h-[2.5rem] border-1 outline-none mx-3 rounded-lg"
          />
          <MicIcon className="w-5 h-5 mr-3 cursor-pointer" />
          <span className="w-13 h-10 cursor-pointer  bg-green-600 rounded-lg flex items-center justify-center ">
            <SendIcon className="w-5 h-5" />
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
