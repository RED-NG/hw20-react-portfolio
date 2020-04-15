import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
