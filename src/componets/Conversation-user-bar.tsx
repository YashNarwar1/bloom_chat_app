import { cn } from "../lib/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface ConversationUserBarProps {
  name: string;
  src?: string;
  active?: boolean;
  lastMessage?: string;
  lastMessageAt?: string;
  onClick?: () => void;
}

export const ConversationUserBar = ({
  name,
  src,
  active,
  lastMessage,
  lastMessageAt,
  onClick,
}: ConversationUserBarProps) => {
  dayjs.extend(relativeTime);
  const readable = dayjs(lastMessageAt).fromNow();

  return (
    <div
      onClick={onClick}
      className={cn(
        "w-full min-h-[3rem] py-2 cursor-pointer relative flex items-center  rounded-lg  hover:bg-black/20",
        active && "bg-black/30"
      )}>
      <div className="flex gap-1">
        <img
          src={src}
          alt="profile-pic"
          className="w-8 h-8  rounded-full mr-3"
        />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-slate-100 text-md font-semibold">{name}</h2>
          <span className="text-slate-400 tracking-wider text-[12px] absolute top-1 right-1">
            {readable}
          </span>
        </div>
        <p className="text-slate-300 text-[13px] flex items-center gap-3">
          {lastMessage}{" "}
        </p>
      </div>
    </div>
  );
};
