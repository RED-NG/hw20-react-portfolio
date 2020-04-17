import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div class="icon-bar">
      <a
        href="https://www.linkedin.com/in/philip-ng-b68b6693/"
        class="linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-linkedin"></i>
      </a>
      <a
        href="https://www.youtube.com/user/MicroBlizz/"
        class="youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-youtube"></i>
      </a>
      <a
        href="https://github.com/RED-NG"
        target="_blank"
        class="github"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github"></i>
      </a>
    </div>
  );
}

export default Sidebar;
