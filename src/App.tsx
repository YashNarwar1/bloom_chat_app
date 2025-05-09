import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";

import GetUser from "./api/getUser.api";
import Register from "./pages/Register";
import { useEffect, useState } from "react";

function App() {
  const { data: user, isLoading } = GetUser();
  const [width, setWidth] = useState<number>(0);

  const isAuthenticated = !!user;

  useEffect(() => {
    setTimeout(() => {
      width >= 100 || !isLoading ? setWidth(100) : setWidth((prev) => prev + 5);
    }, 400);
  }, [width]);

  console.log(width);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center ">
        <h1 className="text-xl font-bold tracking-widest mb-5 ">
          Loading..<span className="animate-ping text-2xl font-bold">.</span>
        </h1>
        <div className="w-[20rem] h-2 bg-slate-600 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
            style={{ width: `${width}%` }}></div>
        </div>
        <p className="text-slate-800 font-bold tracking-wider mt-3">{`${width}%`}</p>
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
