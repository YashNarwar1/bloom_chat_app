import { LogOutIcon } from "lucide-react";

interface LogoutModalProps {
  handleLogout: () => void;
}

export const LogoutModal = ({ handleLogout }: LogoutModalProps) => {
  return (
    <div className="min-w-[15rem] h-[8rem] p-4 flex flex-col gap-5 items-center absolute bottom-10 left-15 bg-black/65 rounded-2xl z-20">
      <h1 className="text-lg font-semibold text-slate-100">
        Are you sure you want to logout?
      </h1>
      <button
        onClick={handleLogout}
        className="flex h-[2rem] w-[15rem] items-center justify-center rounded-xl bg-green-500 gap-3   cursor-pointer">
        <span className=" flex items-center justify-center text-slate-800 tracking-wider font-bold">
          Logout
        </span>
        <LogOutIcon className="w-5 h-5 text-slate-800" />
      </button>
    </div>
  );
};
