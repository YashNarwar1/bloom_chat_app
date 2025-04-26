import { PlusIcon, SearchIcon } from "lucide-react";
import { Input } from "../Input";

import { useChat, useConversation } from "../../store/chat.store";
import getAllConversations from "../../api/getAllConversations.api";
import { ConversationUserBar } from "../Conversation-user-bar";

export const ChatMiddleBar = () => {
  const { data: users } = getAllConversations();
  const { setRecipient, setSelectedConversation } = useConversation();

  const { setOpenChatModal } = useChat();

  console.log(users);

  const handleSelectUser = (user: any) => {
    setRecipient({
      _id: user._id,
      username: user.username,
      profilePic: user.profilePic,
      status: user.status || "offline",
      lastSeen: new Date().toISOString(),
    });

    setSelectedConversation(user._id);
  };

  return (
    <div className="flex ">
      <div className="w-full sm:w-[20rem] h-screen flex flex-col bg-black/80">
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

        <div className="flex flex-col w-full h-[40rem] px-3 my-3 overflow-auto">
          <h1 className="text-lg text-slate-400 tracking-wider mb-3">Recent</h1>
          <div className="flex flex-col gap-2">
            {users?.map((user: any) => (
              <ConversationUserBar
                key={user._id}
                name={user.user.username} // 👈 fix: get from `user.user`
                src={user.user.profilePic}
                lastMessage={user.lastMessage} // 👈 pass it!
                lastMessageAt={user.lastMessageAt} // 👈 pass it!
                onClick={() => handleSelectUser(user.user)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
