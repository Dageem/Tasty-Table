import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayCategory from "./components/DisplayCategory";

function App() {
  return (
    <>
    <Routes>
      <Route path="/categories" element={<DisplayCategory />} />
    </Routes>
    </>
  );
}

export default App;