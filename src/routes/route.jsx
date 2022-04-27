import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const ReactRoute = () => {
  return (
    <Routes>
      <Route exect path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default ReactRoute;
