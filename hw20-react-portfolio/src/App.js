import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
