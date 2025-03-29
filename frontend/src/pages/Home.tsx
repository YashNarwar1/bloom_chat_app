import { MessageArea } from "../componets/MessageArea";
import { useState } from "react";

import LogoutUser from "../api/logout.api";
import { SideBar } from "../componets/sideBar";
import { LogoutModal } from "../componets/logoutModal";

const Home = () => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const muatation = LogoutUser();

  const handleLogout = () => {
    muatation.mutate();
    setOpenLogoutModal((prev) => !prev);
  };

  return (
    <div className="flex h-full w-full relative">
      {openLogoutModal && <LogoutModal handleLogout={handleLogout} />}
      <SideBar setOpenLogoutModal={setOpenLogoutModal} />

      <div className={`w-[calc(100%-20rem)]`}>
        <MessageArea />
      </div>
    </div>
  );
};

export default Home;
