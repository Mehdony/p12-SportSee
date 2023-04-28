import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home/Home.jsx'
import Login from '../Pages/Login/Login.jsx'
import Error404 from "../components/Error/ErrorRoute.jsx";

export function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/user/:id" element={<Home/>} />
        <Route path="*" element={<Error404/>} />
    </Routes>
  )
}
export default Routing;
