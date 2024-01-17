import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import ProtonAnimation from "./ProtonAnimation";

function App() {
  const nameBoxRef = useRef<HTMLDivElement>(null);
  const titleBreakRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    const nameBox = nameBoxRef.current;
    const titleBreak = titleBreakRef.current;

    if (nameBox && titleBreak) {
      const nameBoxWidth = nameBox.getBoundingClientRect().width;
      titleBreak.style.width = `${nameBoxWidth}px`;
    }
  }, []);

  return (
    <div className="App">
      {/* Navbar*/}
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" className="bootstrap-navbar">
        <Navbar.Brand href="#welcome-page">MS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about-me">About</Nav.Link>
            <Nav.Link href="#featured-projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/11JAy3jrJQP9DdvGWRrvlsqXlANpa1Ov2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div id="welcome-page">
        <div id="welcome-page-name-box" ref={nameBoxRef}>
          Michael Sun
        </div>
        <hr id="title-break" ref={titleBreakRef} />
        <div id="social-links">
          <ul id="social-links-list">
            <li className="social-link-item">
              <a
                href="https://github.com/msun5040"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/michael-sun-7338791b5/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="arrow-container">
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>

      {/* <div className="buffer-bar"></div> */}

      <div id="about-me">
        <div id="about-me-container">
          <div id = "portrait-container">
            <img id="portrait" src="images/IMG_6611.jpg"></img>
          </div>
          <div>
            <h2>About me</h2>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
