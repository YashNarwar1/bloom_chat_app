
import { useQuery } from "@tanstack/react-query";



const GetAllUsers = () => {
    const {data, isLoading , isError} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const response = await fetch("/api/auth/getAll" );
          if(!response.ok){
            throw new Error("Something went wrong while getting users");
          };

          const data = await response.json();
         
          return data;

        },
        
    })
    return {data, isLoading, isError};
};


export default GetAllUsers;