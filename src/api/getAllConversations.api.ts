import { useQuery } from "@tanstack/react-query"

const getAllConversations = () => {
    const { data, isLoading, isError} = useQuery({
        queryKey: ["conversations"],
        queryFn: async () => {
           const response = await fetch("/api/chat/conversations", {
            method: "GET",
            credentials: "include"
           });
           if(!response.ok){
             throw new Error("Something went wrong while getting conversations");
           };
           const data = await response.json();
           return data;

        }
    })

    return {data, isLoading , isError};
}

export default getAllConversations;