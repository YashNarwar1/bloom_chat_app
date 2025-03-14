import { create } from "zustand";

interface AuthState {
    username: string;
    email: string;
    password: string;
    setField: (name: string, value: string) => void;
}


const useStore = create<AuthState>((set) => ({
username: "",
email: "",
password: "",
setField: (name , value) => set((state) => ({...state, [name]: value}))
}));


export default useStore;