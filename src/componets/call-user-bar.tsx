import { PhoneIncomingIcon } from "lucide-react";

interface ChatUserBarProps {
  name: string;
  LastMessage?: string;
  time?: string;
  count?: number;
}

export const CallUserBar = ({ name, count }: ChatUserBarProps) => {
  return (
    <div className="w-full h-[3rem] cursor-pointer relative flex  items-center rounded-lg  hover:bg-black/20 px-4 ">
      <img
        src="/assets/yash.jpg"
        alt="profile-pic"
        className="w-8 h-8 rounded-full mr-3"
      />
      <div className="flex flex-col ">
        <h2 className="text-slate-200 text-md">{name}</h2>
        <p className="text-slate-600 flex items-center gap-2">
          <PhoneIncomingIcon className="w-3 h-3" />
          Incoming
        </p>
      </div>
      <p className="text-green-400 text-md absolute right-0 bg-slate-600 rounded-full px-2 mr-2">
        {count}
      </p>
    </div>
  );
};
