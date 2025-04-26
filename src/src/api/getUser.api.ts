
import { useQuery } from "@tanstack/react-query";



const GetUser = () => {
    const {data, isLoading , isError} = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
          const response = await fetch("/api/auth/get", {
            method: "GET",
            credentials: "include",
          });
          if(!response.ok){
            throw new Error("Something went wrong while getting user");
          };

          const data = await response.json();
          return data;
        },
        
    })
    return {data, isLoading, isError};
};


export default GetUser;