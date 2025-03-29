import {  useMutation, } from "@tanstack/react-query"
import { loginUser } from "../types/auth.type";
import toast from "react-hot-toast";


export const LoginUser = () => {
 

  const mutation = useMutation({
    mutationFn: async (user: loginUser) => {
        const response = await fetch('api/auth/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(user)
        });

        if(!response.ok){
            throw new Error("Something went wrong while logging in");
        };

        const data = await response.json();
        return data;
    },
    onSuccess: () => {
     
      toast.success("User Logged in Successfully")
    },
    onError: (error) =>  {
        console.log("Error while logging in", error);
        toast.error(error.message);  
    }
  })
  return mutation;
};


export default LoginUser;