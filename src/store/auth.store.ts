import { create } from "zustand";

interface AuthState {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    setField: (name: string, value: string) => void;
}


const useStore = create<AuthState>((set) => ({
username: "",
email: "",
password: "",
confirmPassword: "",
setField: (name , value) => set((state) => ({...state, [name]: value}))
}));


export default useStore;