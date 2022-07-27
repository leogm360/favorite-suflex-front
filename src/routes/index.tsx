import { Route, Routes } from "react-router-dom";
import { Home, Landing, Login, Register } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />

      {/* <Route /> */}

      {/* <Route /> */}
    </Routes>
  );
};
