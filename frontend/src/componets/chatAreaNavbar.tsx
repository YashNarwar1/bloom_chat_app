import { InfoIcon, MenuIcon, PhoneCallIcon, VideoIcon } from "lucide-react";
import GetAllUsers from "../api/getAllUsers.api";
import { useConversation } from "../store/chat.store";

interface RecipientType {
  _id: string;
  username: string;
  profilePic?: string;
  status?: string;
  lastSeen?: string;
}

export const ChatAreaNavbar = ({ user }: { user: RecipientType }) => {
  const { recipient: User } = useConversation();

  return (
    <div className="w-full h-[4rem] flex items-center justify-between bg-black/30 px-4">
      <div className="flex items-center">
        <div className="w-[3rem] h-[3rem] rounded-full bg-slate-300 flex items-center justify-center ml-4 text-black font-bold">
          {User.username.charAt(0).toUpperCase() || "U"}
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="text-lg font-semibold text-slate-300">
            {User.username || "Username"}
          </h1>
          <p className="text-sm flex items-center gap-2 text-slate-300">
            <span
              className={`w-2 h-2 rounded-full ${
                User.status === "online" ? "bg-green-400" : "bg-red-600"
              }`}
            />
            {User.status === "online" ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <PhoneCallIcon className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
        <VideoIcon className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
        <InfoIcon className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
        <MenuIcon className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};
