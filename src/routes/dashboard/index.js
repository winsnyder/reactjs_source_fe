import React from "react";
import { Routes, Route } from "react-router-dom";

/*Login Page*/
import Login from "../../pages/dashboard/authen.page";
/*User Page*/
import UserPage from "../../pages/dashboard/user.page";

export default function RouterDashBoard() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>
    </>
  );
}
