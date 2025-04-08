import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast} from "react-hot-toast";
import { registerUser } from "../types/auth.type";


const RegisterUser = () => {
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
        queryClient.invalidateQueries({ queryKey: ["users"] });
        toast.success("User registered successfully");
       },
       onError: (error) => {
         console.log("Error while registering user", error);
         toast.error(error.message);   
       }
   });

   return mutation;
}




export default RegisterUser;