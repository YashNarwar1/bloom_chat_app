import {
  MessageCircle,
  PhoneCallIcon,
  SettingsIcon,
  SunIcon,
  User,
} from "lucide-react";

import ChatStore from "../store/chat.store";
import { ChatMiddleBar } from "./middlebar/callMiddleBar";
import { PhoneMiddleBar } from "./middlebar/phoneMiddlebar";
import { StatusMiddleBar } from "./middlebar/statusMiddleBar";
import { SettingMiddleBar } from "./middlebar/settingMiddlebarBar";

interface SideBarProps {
  setOpenLogoutModal: (callback: (prev: boolean) => boolean) => void;
}

export const SideBar = ({ setOpenLogoutModal }: SideBarProps) => {
  const handleLogoutModal = () => {
    setOpenLogoutModal((prev: boolean) => !prev);
  };

  const { activeBar, setActiveBar } = ChatStore();

  return (
    <>
      <div className="bg-black/70 h-screen py-5 w-[4rem] flex flex-col  px-4">
        <img src="/assets/msg.png" alt="chatIcon" className="w-8 h-8 mb-10" />
        <div className="flex flex-col justify-between h-full ">
          <div className="w-[10rem] flex flex-col gap-8 ">
            <MessageCircle
              onClick={() => setActiveBar("chatBar")}
              className={`w-5 h-5  cursor-pointer hover:text-green-400 ${
                activeBar === "chatBar" && " text-green-400 w-6 h-6"
              }`}
            />

            <User
              onClick={() => setActiveBar("statusBar")}
              className={`w-5 h-5 cursor-pointer hover:text-green-400 ${
                activeBar === "statusBar" && " text-green-400 w-6 h-6"
              }`}
            />
            <PhoneCallIcon
              onClick={() => setActiveBar("callBar")}
              className={`w-5 h-5 cursor-pointer hover:text-green-400 ${
                activeBar === "callBar" && " text-green-400 w-6 h-6"
              }`}
            />
            <SettingsIcon
              onClick={() => setActiveBar("settingBar")}
              className={`w-5 h-5 cursor-pointer hover:text-green-400 ${
                activeBar === "settingBar" && " text-green-400 w-6 h-6"
              }`}
            />
          </div>
          <div className="flex flex-col gap-5">
            <SunIcon className="w-6 h-6" />
            <div onClick={handleLogoutModal} className="cursor-pointer">
              <img src="/assets/boy.png" alt="userIcon" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      {activeBar === "chatBar" && <ChatMiddleBar />}
      {activeBar === "callBar" && <PhoneMiddleBar />}
      {activeBar === "statusBar" && <StatusMiddleBar />}
      {activeBar === "settingBar" && <SettingMiddleBar />}
    </>
  );
};
