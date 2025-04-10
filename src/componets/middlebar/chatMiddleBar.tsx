import { PlusIcon, SearchIcon } from "lucide-react";
import { Input } from "../Input";
import { ChatUserBar } from "../Chat-user-bar";
import GetAllUsers from "../../api/getAllUsers.api";
import { useChat, useConversation } from "../../store/chat.store";

export const ChatMiddleBar = () => {
  const { data: users } = GetAllUsers();
  const { recipient, setRecipient, setSelectedConversation } =
    useConversation();

  const { setOpenChatModal } = useChat();

  const handleSelectUser = (user: any) => {
    setRecipient({
      _id: user._id,
      username: user.username,
      profilePic: user.profilePic,
      status: user.status || "offline",
      lastSeen: new Date().toISOString(),
    });
    setOpenChatModal();
    setSelectedConversation(user._id);
  };

  return (
    <div className="flex">
      <div className="w-[20rem] h-screen flex flex-col bg-black/80">
        <div className="flex w-full justify-between px-5 my-3">
          <h1 className="text-xl text-slate-400 tracking-wider">Chats</h1>
          <span className="w-8 h-8 bg-slate-600 rounded-md flex items-center justify-center">
            <PlusIcon
              onClick={() => setOpenChatModal()}
              className="w-5 h-5 text-green-300"
            />
          </span>
        </div>

        <div className="px-5 relative">
          <Input
            type="text"
            placeholder="search or start new chat"
            name="search"
            className="text-white h-8"
          />
          <SearchIcon className="w-4 h-4 absolute bottom-4 right-7 text-green-300" />
        </div>

        <div className="flex flex-col w-full h-[40rem] px-4 my-3 overflow-auto">
          <h1 className="text-lg text-slate-400 tracking-wider mb-3">Recent</h1>
          <div className="flex flex-col gap-2">
            {users?.map((user: any) => (
              <ChatUserBar
                key={user._id}
                name={user.username}
                src={user.profilePic}
                active={recipient?._id === user._id}
                onClick={() => handleSelectUser(user)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
