import { useEffect, useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { usersAPI } from "./store/UsersSlice/usersAPI";
import { usersSelect } from "./store/UsersSlice/UsersSlice";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { HomePage } from "./Components/HomePage/HomePage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/:id" element={<HomePage />} />
    </Routes>
  );
}

export default App;
