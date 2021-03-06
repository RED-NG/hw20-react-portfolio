import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Home.css";
import Sidebar from "../../Sidebar/Sidebar";

function Home() {
  return (
    <nav class="background-image">
      <div>
        {" "}
        <Navbar />
        <div class="container text-center text-white">
          <div className="introduction">
            <h2 id="hello">Hi, my name is</h2>
            <h1 id="nameSake">PHILIP NG</h1>
            {/* <h1>Welcome to my portfolio</h1> */}
            <h5>Full stack web developer</h5>
            <h5>I build websites and applications</h5>
            <a href="#contact">
              <button
                type="button"
                class="btn-large btn-dark"
                id="home-page-btn"
              >
                Get In Touch
              </button>
            </a>
          </div>
          <Sidebar />
        </div>
      </div>
    </nav>
  );
}

export default Home;
