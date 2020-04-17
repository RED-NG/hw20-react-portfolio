import React from "react";
// import { Row, Col } from "react-bootstrap";
import "./Contact.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

function Contact() {
  return (
    <nav class="background-image-contact">
      <div id="contact">
        <div class="h2TitleDiv">
          <h2 className="contactH2">Get in touch!</h2>{" "}
        </div>
        <div className="containerofcontainers">
          <div className="container-contact">
            {/* <Row>
            <Col> */}
            <div className="contactInfoDiv text-left col-md-6">
              <div>
                <p>
                  <b>Email: </b>
                  <a
                    className="link"
                    href="phil__n@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp; phil__n@hotmail.com
                  </a>
                </p>
                <p>
                  <b>Phone: </b>
                  <span> &nbsp;416-831-2891</span>
                </p>{" "}
              </div>
            </div>
            {/* </Col>{" "}
          </Row>
          <Row>
            <Col> */}
            <div className="contactInfoDiv text-left col-md-6">
              {" "}
              <p>
                <b>Github : </b>
                <a
                  className="link"
                  href="https://github.com/red-ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;https://github.com
                </a>
              </p>
              <p>
                <b>Linkedin : </b>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/philip-ng-b68b6693/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp; www.linkedin.com
                </a>
              </p>{" "}
            </div>
            {/* </Col>
          </Row> */}
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12">
                  <form>
                    <label
                      htmlFor="defaultFormContactNameEx"
                      className="grey-text"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="defaultFormContactNameEx"
                      className="form-control"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactEmailEx"
                      className="grey-text"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactSubjectEx"
                      className="grey-text"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="defaultFormContactSubjectEx"
                      className="form-control"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
                      Your message
                    </label>
                    <textarea
                      type="text"
                      id="defaultFormContactMessageEx"
                      className="form-control"
                      rows="3"
                    />
                    <div className="text-center mt-4 ">
                      <MDBBtn color="dark" id="submitBtn" outline type="submit">
                        Send
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Contact;
