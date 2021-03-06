import React from "react";
import "./About.css";
import ProfilePicture from "./img/about-profilepic.jpg";

function About() {
  return (
    <section id="about">
      <div className="parentDiv">
        <div className="aboutDiv">
          <h2 class="aboutTitle">
            <span>Let me tell you a little about myself...</span>
          </h2>
        </div>
      </div>
      <div className="text-container">
        <div class="about-me-text-div">
          <div className="about-me-content">
            <div className="image-Div">
              {" "}
              <img src={ProfilePicture} id="profilePic" alt="me"></img>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 d-block m-auto text-left">
                <p className="aboutMeP">Hello! My name is Philip Ng.</p>
                <p className="aboutMeP">
                  While studying History and Education at Queen's University, I
                  became well practiced in analysis, interpretation, research,
                  and multi-faceted political, economic and social evaluations.
                  After graduating, I wanted to use these skills to focus on
                  making people's lives easier. I grew up with a love of
                  puzzles, problem solving and a yearning to understand complex
                  issues. I deeply value innovation and originality and coding
                  was something that encompassed all those things.
                </p>
                <p className="aboutMeP">
                  From my time at UofT Mississauga's Coding Bootcamp, I have
                  experience working with technologies such as: HTML, CSS,
                  Bootstrap, Javascript, JQuery, Node.js, Express, Sequelize,
                  MySQL, MongoDB, and React. I intend to use these skills to
                  build useful websites and applications. Check out some of the
                  projects I've worked on by scrolling further down below!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
