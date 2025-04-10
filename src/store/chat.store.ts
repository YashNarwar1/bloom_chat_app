import { create } from "zustand";

//  Define the structure for the recipient object
interface RecipientType {
  _id: string;
  username: string;
  profilePic: string;
  status: string;
  lastSeen: string;
}






interface MiddlebarStore {
  activeBar: string;
  setActiveBar: (bar: MiddlebarStore["activeBar"]) => void;
}





export type Message = { 
  text: string;
  senderId: string;
  receiverId: string;

};

interface ConversationStore {
  selectedConversation: string| null ;
  setSelectedConversation: (selectedConversation: string) => void;
   recipient: RecipientType,
   setRecipient: (recipient: RecipientType) => void,
  messages: Message[];
  setMessages: (msgs: Message[]) => void;
}


// ✅ Create the store
export const MiddleBarStore = create<MiddlebarStore>((set) => ({
  activeBar: "chatBar",
  setActiveBar: (bar) => set(() => ({ activeBar: bar })),

}));




export const useConversation = create<ConversationStore>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: string) => set({ selectedConversation }),
  recipient: {
    _id: "",
    username: "",
    profilePic: "",
    status: "",
    lastSeen: "",
  },
 
  setRecipient: (recipient) => set(() => ({ recipient })),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));


interface UseChatModalProps {
  openChatModal: boolean;
  setOpenChatModal: () => void;
}

export const useChat = create<UseChatModalProps>((set) => ({
  openChatModal: false,
  setOpenChatModal: () =>
    set((state) => ({ openChatModal: !state.openChatModal })),
}));