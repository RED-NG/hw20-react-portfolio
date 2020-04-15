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
            <h2>Hi, my name is</h2>
            <h1 id="name">PHILIP NG</h1>
            {/* <h1>Welcome to my portfolio</h1> */}
            <h5>
              A full stack web developer from the UTM Mississauga Coding
              Bootcamp program, I build websites and applications for fun.
            </h5>
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
