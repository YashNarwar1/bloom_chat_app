import { InfoIcon, MenuIcon, PhoneCallIcon, VideoIcon } from "lucide-react";

export const ChatAreaNavbar = () => {
  const user = {
    name: "yash",
    status: "online",
  };

  return (
    <div className="w-full h-[4rem] flex items-center justify-between bg-black/30 px-4">
      <div className="flex items-center ">
        <p className="w-[3rem] h-[3rem] rounded-full bg-slate-300 flex items-center justify-center ml-4">
          YN
        </p>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold ml-4 text-slate-300">
            Username
          </h1>
          <p className="text-sm ml-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            {user.status}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <PhoneCallIcon className="w-5 h-5 text-slate-500 hover:text-black/70 cursor-pointer" />
        <VideoIcon className="w-5 h-5 text-slate-500 hover:text-black/70 cursor-pointer" />
        <InfoIcon className="w-5 h-5 text-slate-500 hover:text-black/70 cursor-pointer" />
        <MenuIcon className="w-5 h-5 text-slate-500 hover:text-black/70 cursor-pointer" />
      </div>
    </div>
  );
};
