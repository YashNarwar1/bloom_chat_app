import {
  MessageCircle,
  PhoneCallIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SunIcon,
  User,
} from "lucide-react";
import { Input } from "../componets/Input";
import { ChatUserBar } from "../componets/Chat-user-bar";
import { MessageArea } from "../componets/MessageArea";

const Home = () => {
  return (
    <div className="flex h-full w-full">
      <div className="bg-black/70 h-screen py-5 w-[4rem] flex flex-col  px-4">
        <img src="/assets/msg.png" alt="chatIcon" className="w-8 h-8 mb-10" />
        <div className="flex flex-col justify-between h-full ">
          <div className="w-[10rem] flex flex-col gap-8 ">
            <span className="w-[3rem] border-r-4 border-green-400">
              <MessageCircle className="w-6 h-6 text-green-400" />
            </span>
            <User className="w-5 h-5" />
            <PhoneCallIcon className="w-5 h-5" />
            <SettingsIcon className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-5">
            <SunIcon className="w-6 h-6" />
            <img src="/assets/boy.png" alt="userIcon" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="w-[20rem] h-screen flex flex-col bg-black/80">
        <div className="flex w-full justify-between px-5 my-5 ">
          <h1 className="text-lg text-slate-400 tracking-wider">Chats</h1>
          <span className="w-8 h-8 bg-slate-600 rounded-md flex items-center justify-center">
            <PlusIcon className="w-5 h-5 text-green-300" />
          </span>
        </div>
        {/* Search Input div */}
        <div className="px-5 relative">
          <Input
            type="text"
            placeholder="Search"
            name="search"
            className="text-white"
          />
          <SearchIcon className="w-5 h-5 absolute bottom-7 right-7 text-green-300" />
        </div>
        <div className="flex flex-col w-full h-[40rem] px-4 my-3 overflow-auto ">
          <h1 className="text-lg text-slate-400 tracking-wider mb-3">Recent</h1>
          <div className="flex flex-col gap-2">
            <ChatUserBar name="Yash narwar" count={1} />
            <ChatUserBar name="ajay raghav" count={3} />
          </div>
        </div>
      </div>
      <div className={`w-[calc(100%-20rem)]`}>
        <MessageArea />
      </div>
    </div>
  );
};

export default Home;
