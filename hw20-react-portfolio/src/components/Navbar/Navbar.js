import React from "react";
import "./Navbar.css";
import Resume from "../Resume/Resume2020.pdf";

function Navbar() {
  return (
    <section>
      <div id="nav-header">
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <a class="navbar-brand" href="./index.html">
            <h3>Philip Ng</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="collapse navbar-collapse"></ul>
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="index.html">
                Home
              </a>
              <a class="nav-item nav-link" href="#about">
                About
              </a>
              <a class="nav-item nav-link" href="#portfolio">
                Projects
              </a>
              <a class="nav-item nav-link" href="#contact">
                Contact
              </a>
              <a
                class="nav-item nav-link"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
