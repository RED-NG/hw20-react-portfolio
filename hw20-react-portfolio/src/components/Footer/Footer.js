import React from "react";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <footer id="sticky-footer" class=" bg-dark text-white-50">
        <div class="container mx-auto">
          Copyright &copy; 2020 Philip Ng |
          <li class="list-inline-item">
            <a href="https://github.com/RED-NG">
              <i class="fab fa-github-square fa-2x"></i>
            </a>
          </li>{" "}
          <li class="list-inline-item">
            <a href="https://www.linkedin.com/in/philip-ng-b68b6693/">
              {" "}
              <i class="fab fa-linkedin"></i>
            </a>{" "}
          </li>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
