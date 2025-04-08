import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";
import {useConversation} from "../store/chat.store";


interface Data {
    text: string;
}  

const SendMessage = () => {
   const queryClient = useQueryClient();
   const {recipient} = useConversation()
   const recieverId = recipient._id;

    const mutation = useMutation({
        mutationFn: async ({ ...data }: Data) => {
          const response = await fetch(`api/chat/send/${recieverId}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
          });
          
          if(!response.ok){
             throw new Error("Something went wrong while sending message");
          };
           
          return await response.json();


        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["messages"]})
          
        },
        onError: (error) => {
            toast.error(error?.message || "Something went wrong");
        }
    })


    return mutation;
};


export default SendMessage;