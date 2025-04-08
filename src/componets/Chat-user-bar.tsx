import { cn } from "../lib/utils";

interface ChatUserBarProps {
  name: string;
  src?: string;
  active?: boolean;
  onClick?: () => void;
}

export const ChatUserBar = ({
  name,
  src,
  active,
  onClick,
}: ChatUserBarProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "w-full h-[3rem] cursor-pointer relative flex items-center rounded-lg px-4 hover:bg-black/20",
        active && "bg-black/30"
      )}>
      <img src={src} alt="profile-pic" className="w-8 h-8 rounded-full mr-3" />
      <h2 className="text-slate-200 text-md">{name}</h2>
    </div>
  );
};
