import React from "react";
import "./index.css";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
