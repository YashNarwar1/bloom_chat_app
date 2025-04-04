import { MessageArea } from "../componets/MessageArea";
import { useState } from "react";

import { SideBar } from "../componets/sideBar";
import { LogoutModal } from "../componets/logoutModal";

const Home = () => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  return (
    <div className="flex h-full w-full relative">
      {openLogoutModal && (
        <LogoutModal setOpenLogoutModal={setOpenLogoutModal} />
      )}
      <SideBar setOpenLogoutModal={setOpenLogoutModal} />

      <div className={`w-[calc(100%-20rem)]`}>
        <MessageArea />
      </div>
    </div>
  );
};

export default Home;
