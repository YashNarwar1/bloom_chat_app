import { SearchIcon } from "lucide-react";
import GetAllUsers from "../api/getAllUsers.api";
import { useChat, useConversation } from "../store/chat.store";
import { ChatUserBar } from "./Chat-user-bar";
import { Input } from "./Input";

export const ChatList = () => {
  const { data: users } = GetAllUsers();
  const { setOpenChatModal } = useChat();
  const { recipient, setRecipient, setSelectedConversation } =
    useConversation();

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
    <div className="w-full flex flex-col  mt-5">
      <h1 className="text-2xl text-slate-200 tracking-wider pl-3 pb-4">
        New Chat
      </h1>
      <div className="px-2 relative mb-4">
        <Input
          type="text"
          placeholder="search or start new chat"
          name="search"
          className="text-white h-8"
        />
        <SearchIcon className="w-4 h-4 absolute bottom-4 right-7 text-green-300" />
      </div>

      <div className="h-full flex flex-col gap-3">
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
  );
};
