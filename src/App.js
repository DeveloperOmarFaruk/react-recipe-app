import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import MoreDetails from "./Components/MoreDetails/MoreDetails";
import ErrorPath from "./Components/ErrorPath/ErrorPath";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/more-details/:idMeal" element={<MoreDetails />} />
        <Route path="*" element={<ErrorPath />} />
      </Routes>
    </Router>
  );
}
export default App;
