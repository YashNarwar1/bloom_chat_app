import {  useMutation, useQueryClient, } from "@tanstack/react-query"

import toast from "react-hot-toast";


export const LogoutUser = () => {
 
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
        const response = await fetch('api/auth/logout', { method: 'POST' });

        if(!response.ok){
            throw new Error("Something went wrong while logging out");
        };
       

    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      window.location.reload()
      toast.success("User Logged out Successfully")
    },
    onError: (error) =>  {
        console.log("Error while logging out", error);
        toast.error(error.message);  
    }
  })
  return mutation;
};


export default LogoutUser;