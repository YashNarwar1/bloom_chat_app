import { Navigate, Outlet } from "react-router-dom";
import GetUser from "../api/getUser.api";

const ProtectedRoute = () => {
  const { data: user, isLoading, isError } = GetUser();

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[url('/background.jpg')] bg-cover flex items-center justify-center  gap-4 font-bold text-slate-800">
        <h1 className="text-5xl">Loading</h1>
        <p className="h-10 w-10 border-4 border-slate-800 rounded-full border-t-slate-300 animate-spin"></p>
      </div>
    );
  }

  if (isError) {
  
    return <Navigate to="/login" />; 
  }

  if (user) {
    return <Outlet />; 
  } else {
    return <Navigate to="/login" />; 
  }
};

export default ProtectedRoute;
