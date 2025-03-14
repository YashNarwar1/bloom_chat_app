interface ChatUserBarProps {
  name: string;
  LastMessage?: string;
  time?: string;
  count?: number;
}

export const ChatUserBar = ({ name, count }: ChatUserBarProps) => {
  return (
    <div className="w-full h-[3rem] cursor-pointer relative flex  items-center rounded-lg  hover:bg-black/20 px-4 ">
      <img
        src="/assets/yash.jpg"
        alt="profile-pic"
        className="w-8 h-8 rounded-full mr-3"
      />
      <h2 className="text-slate-200 text-md">{name}</h2>
      <p className="text-green-400 text-md absolute right-0 bg-slate-600 rounded-full px-2 mr-2">
        {count}
      </p>
    </div>
  );
};
