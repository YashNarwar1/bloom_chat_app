import { create } from "zustand";

// 👇 Define the structure for the recipient object
interface RecipientType {
  _id: string;
  username: string;
  profilePic: string;
  status: string;
  lastSeen: string;
}

// 🧠 Define the state part
interface ChatStoreState {
  activeBar: "chatBar" | "statusBar" | "callBar" | "settingBar";
  recipient: RecipientType;
}

// 🛠️ Define the actions part
interface ChatStoreActions {
  setActiveBar: (bar: ChatStoreState["activeBar"]) => void;
  setRecipient: (recipient: RecipientType) => void;
}

// 🧩 Combine both
type ChatStoreType = ChatStoreState & ChatStoreActions;

// ✅ Create the store
const ChatStore = create<ChatStoreType>((set) => ({
  activeBar: "chatBar",
  recipient: {
    _id: "",
    username: "",
    profilePic: "",
    status: "",
    lastSeen: "",
  },
  setActiveBar: (bar) => set(() => ({ activeBar: bar })),
  setRecipient: (recipient) => set(() => ({ recipient })),
}));

export default ChatStore;
