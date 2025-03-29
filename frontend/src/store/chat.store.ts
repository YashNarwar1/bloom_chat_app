import { create } from "zustand";

interface ChatStoreState {
    activeBar: "chatBar" | "statusBar" | "callBar" | "settingBar";
}

interface ChatStoreActions {
    setActiveBar: (bar: ChatStoreState["activeBar"]) => void;
}

type ChatStoreType = ChatStoreState & ChatStoreActions;

const ChatStore = create<ChatStoreType>((set) => ({
    activeBar: "chatBar",   // Default active bar

    // Function to set the active bar
    setActiveBar: (bar) => set(() => ({
        activeBar: bar
    }))
}));

export default ChatStore;