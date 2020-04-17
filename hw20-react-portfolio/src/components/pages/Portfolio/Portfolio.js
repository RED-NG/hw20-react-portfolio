import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import "./Portfolio.css";
import PAC from "./img/pac-it.png";
import Comparison from "./img/comparison-game.png";
import Budget from "./img/budget-tracker.png";
import Password from "./img/password-generator.png";
import Note from "./img/note-taker.png";
import List from "./img/to-do-list.png";

function Portfolio() {
  return (
    <div className="container" id="portfolio">
      <div className="portfolioTitleDiv">
        <h2 class="portfolioTitle">
          <span>Here are some of the projects I've worked on...</span>
        </h2>
      </div>
      <div className="cards">
        <div className="card-container-div">
          <Container>
            <Row>
              <Col className="card-col">
                <Card
                  border="dark"
                  style={{ width: "18rem" }}
                  class="card-body"
                >
                  <Card.Img class="card-img" variant="top" src={PAC} />
                  <Card.Body>
                    <Card.Title>PAC IT</Card.Title>
                    <Card.Text>
                      eCommerce website that allows users to post items to sell,
                      and buy items.
                    </Card.Text>
                    <Button
                      className="primaryBtn"
                      href="https://github.com/RED-NG/hw15-project-2-P.A.C-IT-Buy-N-Sell"
                      variant="primary"
                    >
                      Github
                    </Button>
                    <Button
                      href="https://pac-it-buy-sell.herokuapp.com/"
                      variant="danger"
                    >
                      Live Link
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="card-col">
                <Card
                  border="dark"
                  style={{ width: "18rem" }}
                  class="card-body"
                >
                  <Card.Img class="card-img" variant="top" src={Budget} />
                  <Card.Body>
                    <Card.Title>Offline Budget App</Card.Title>
                    <Card.Text>
                      An application that allows you to track your budget
                      regardless of internet connection.
                    </Card.Text>
                    <Button
                      href="https://github.com/RED-NG/hw18-progressive-budget"
                      className="primaryBtn"
                      variant="primary"
                    >
                      Github
                    </Button>
                    <Button
                      href="https://offlinebudgetapp.herokuapp.com/"
                      variant="danger"
                    >
                      Live Link
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card-container-div">
          <Container>
            <Row>
              <Col className="card-col">
                <Card
                  border="dark"
                  style={{ width: "18rem" }}
                  class="card-body"
                >
                  <Card.Img variant="top" class="card-img" src={Comparison} />
                  <Card.Body>
                    <Card.Title>Comparison Game</Card.Title>
                    <Card.Text>
                      Comparison quiz app that has user guess whether news
                      headlines are real or fake.
                    </Card.Text>
                    <Button
                      className="primaryBtn"
                      href="https://github.com/RED-NG/hw7-project-1"
                      variant="primary"
                    >
                      Github
                    </Button>
                    <Button
                      href="https://red-ng.github.io/hw7-project-1/"
                      variant="danger"
                    >
                      Live Link
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="card-col">
                <Card
                  border="dark"
                  style={{ width: "18rem" }}
                  class="card-body"
                >
                  <Card.Img class="card-img" variant="top" src={Password} />
                  <Card.Body>
                    <Card.Title>Password Generator</Card.Title>
                    <Card.Text>
                      Generates a password based on length and checked input
                      boxes for the characters.
                    </Card.Text>
                    <Button
                      href="https://github.com/RED-NG/hw3-password-generator"
                      className="primaryBtn"
                      variant="primary"
                    >
                      Github
                    </Button>
                    <Button
                      href="https://red-ng.github.io/hw3-password-generator/"
                      variant="danger"
                    >
                      Live Link
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card-container-div">
          <Container>
            <Row>
              <Col className="card-col">
                <Card
                  border="dark"
                  style={{ width: "18rem" }}
                  class="card-body"
                >
                  <Card.Img class="card-img" variant="top" src={Note} />
                  <Card.Body>
                    <Card.Title>Note taker</Card.Title>
                    <Card.Text>
                      Application that lets user write, save, and delete notes.
                    </Card.Text>
                    <Button
                      className="primaryBtn"
                      href="https://github.com/RED-NG/hw11-note-taker"
                      variant="primary"
                    >
                      Github
                    </Button>
                    <Button
                      href="https://notetaker11app.herokuapp.com/"
                      variant="danger"
                    >
                      Live Link
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="card-col">
                <Card
                  border="dark"
                  style={{ width: "18rem" }}
                  class="card-body"
                >
                  <Card.Img class="card-img" variant="top" src={List} />
                  <Card.Body>
                    <Card.Title>Vanilla JS To-Do List</Card.Title>
                    <Card.Text>
                      Application that allows user to save to-do tasks based on
                      hour.
                    </Card.Text>
                    <Button
                      href="https://github.com/RED-NG/hw5-to-do-list"
                      className="primaryBtn"
                      variant="primary"
                    >
                      Github
                    </Button>
                    <Button
                      href="https://red-ng.github.io/hw5-to-do-list/"
                      variant="danger"
                    >
                      Live Link
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
