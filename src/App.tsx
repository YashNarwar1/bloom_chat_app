import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";

import GetUser from "./api/getUser.api";
import Register from "./pages/Register";

function App() {
  const { data: user, isLoading } = GetUser();

  const isAuthenticated = !!user;

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[url('/background.jpg')] bg-cover flex items-center justify-center  gap-4 font-bold text-slate-800">
        <h1 className="text-5xl">Loading</h1>
        <p className="h-10 w-10 border-4 border-slate-800 rounded-full border-t-slate-300 animate-spin"></p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
