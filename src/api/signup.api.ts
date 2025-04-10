import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast} from "react-hot-toast";
import { registerUser } from "../types/auth.type";
import {  useNavigate } from "react-router-dom";



const RegisterUser = () => {
   const navigate = useNavigate()
   const queryClient = useQueryClient();
   const mutation = useMutation({
       mutationFn: async (user: registerUser) => {
          const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(user)
          });
       
        if(!response.ok){
            throw new Error("Something went wrong while registering");
        }

        const data = await response.json();
        return data; 
       },
       onSuccess: () => {
        toast.success("User Registered and Logged in");
        queryClient.invalidateQueries({ queryKey: ['user'] });
        navigate("/")
       },
       onError: (error) => {
         console.log("Error while registering user", error);
         toast.error(error.message);   
       }
   });

   return mutation;
}




export default RegisterUser;