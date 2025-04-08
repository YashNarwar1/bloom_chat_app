import { MessageCircle, PhoneCallIcon, SettingsIcon, User } from "lucide-react";
import { motion } from "framer-motion";
import { MiddleBarStore } from "../store/chat.store";
import { ChatMiddleBar } from "./middlebar/chatMiddleBar";
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

  const { activeBar, setActiveBar } = MiddleBarStore();

  const MiddleBarComponent = {
    chatBar: <ChatMiddleBar />,
    callBar: <PhoneMiddleBar />,
    statusBar: <StatusMiddleBar />,
    settingBar: <SettingMiddleBar />,
  }[activeBar];

  const sideIcons = [
    { Icon: MessageCircle, bar: "chatBar" },
    { Icon: User, bar: "statusBar" },
    { Icon: PhoneCallIcon, bar: "callBar" },
    { Icon: SettingsIcon, bar: "settingBar" },
  ];

  return (
    <>
      <div className="bg-black/70 h-screen py-5 w-[4rem] flex flex-col  px-4">
        <img src="/assets/msg.png" alt="chatIcon" className="w-8 h-8 mb-10" />
        <div className="flex flex-col justify-between h-full ">
          <div className="w-[10rem] flex flex-col  gap-8 ">
            {sideIcons.map(({ Icon, bar }) => (
              <motion.div
                key={bar}
                onClick={() => setActiveBar(bar)}
                className="cursor-pointe origin-center"
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: activeBar === bar ? 1.1 : 1,
                  color: activeBar === bar ? "#22c55e" : "#ffffff",
                }}>
                <Icon className="w-5 h-5" />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <div onClick={handleLogoutModal} className="cursor-pointer">
              <img src="/assets/boy.png" alt="userIcon" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      {MiddleBarComponent}
    </>
  );
};
