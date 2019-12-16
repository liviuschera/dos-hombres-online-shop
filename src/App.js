import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    // <div>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
    // </div>
  );
}

export default App;
