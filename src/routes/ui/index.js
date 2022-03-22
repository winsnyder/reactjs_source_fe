import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "../../pages/ui/Overview";

export default function RouterUI() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />}></Route>
      </Routes>
    </>
  );
}
