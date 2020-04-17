import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
// import Contact from "./components/pages/Contact/Contact";
import Portfolio from "./components/pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
