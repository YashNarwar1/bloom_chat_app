import { ChatUserBar } from "../Chat-user-bar";

export const SettingMiddleBar = () => {
  return (
    <div className="w-[20rem] h-screen flex flex-col bg-black/80">
      <div className="flex w-full justify-between px-5 my-3 ">
        <h1 className="text-xl text-slate-400 tracking-wider">Settings</h1>
      </div>
      {/* Search Input div */}

      <div className="flex flex-col w-full h-[40rem] px-4 my-3 overflow-auto ">
        <h1 className="text-lg text-slate-400 tracking-wider mb-3">Recent</h1>
        <div className="flex flex-col gap-2">
          <ChatUserBar name="Yash narwar" count={1} />
          <ChatUserBar name="ajay raghav" count={3} />
        </div>
      </div>
    </div>
  );
};
