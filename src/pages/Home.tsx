import { MessageArea } from "../componets/message/MessageArea";
import { useState } from "react";

import { SideBar } from "../componets/sideBar";
import { LogoutModal } from "../componets/logoutModal";
import { ChatList } from "../componets/chatList";
import { useChat } from "../store/chat.store";

const Home = () => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const { openChatModal } = useChat();

  return (
    <div className="flex h-full w-full relative ">
      {openLogoutModal && (
        <LogoutModal setOpenLogoutModal={setOpenLogoutModal} />
      )}
      <SideBar setOpenLogoutModal={setOpenLogoutModal} />
      {openChatModal && (
        <div className="w-[20rem]  min-h-[20rem] pb-4 rounded-2xl px-5 bg-black/85 absolute top-14 left-80 z-30">
          <ChatList />
        </div>
      )}
      <div className={`w-[calc(100%-20rem)]`}>
        <MessageArea />
      </div>
    </div>
  );
};

export default Home;
