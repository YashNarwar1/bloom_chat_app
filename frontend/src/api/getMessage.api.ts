import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useConversation} from "../store/chat.store";

const GetMessage = (receiverId: string) => {

  const { recipient} = useConversation()
  const recieverId = recipient._id;
  


    const { data, isLoading, isError , refetch } = useQuery({
      queryKey: ["messages", receiverId],
      queryFn: async () => {
        try {
          const res = await fetch(`/api/chat/get/${recieverId}`);
          if (!res.ok) throw new Error("Error fetching messages");
          const data =  res.json();
          return data;
        } catch (error) {
          toast.error("Something went wrong while fetching messages");
          throw error;
        }
      },
      enabled: !!recieverId, 
       
    });
     return { data, isLoading, isError, refetch }
  
  };

  export default GetMessage;