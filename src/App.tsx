import React, { useEffect, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import portrait from "./images/portrait.jpg";
import travel_planner from "./images/travel_planner.png";
import pills from "./images/pills.png";
import search_bar from "./images/search_bar.png";
import lungs from "./images/lungs.png";
import brain from "./images/brain.png";
import portfolio from "./images/portfolio.jpg"
import ProtonAnimation from "./ProtonAnimation";
import ProjectComponent from "./projectprops";

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

  const fadeInObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-element");
        }
      });
    });

    let checkedElementsFadeIn = ["#about-me .about-me-container", ".project"];
    let observedObjects: Array<Element> = [];

    checkedElementsFadeIn.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    observedObjects.forEach((element) => observer.observe(element));
  };

  const lineExtendObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("extend-line");
        }
      });
    });

    const tempObj = document.querySelectorAll(".subtitle-break");
    console.log(tempObj);

    tempObj.forEach((element) => observer.observe(element));
  };

  const fadeObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-element");
        }
      });
    });

    let checkedElementsFadeIn = [".project"];
    let observedObjects: Array<Element> = [];

    checkedElementsFadeIn.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    observedObjects.forEach((element) => observer.observe(element));
  };

  useEffect(() => {
    window.addEventListener("scroll", fadeInObserver);
    window.addEventListener("scroll", lineExtendObserver);
    window.addEventListener("scroll", fadeObserver);
  }, []);

  return (
    <div className="App">
      {/* Navbar*/}
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        bg="dark"
        variant="dark"
        className="bootstrap-navbar"
      >
        <Navbar.Brand href="#welcome-page">MS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about-me">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#research">Research</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1Yfv3TZyXdmqPCsMx1cWL1_MMCGOkTCeq/view?usp=sharing"
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
        <div className="about-me-container fade-up-transition-start">
          <div id="portrait-container">
            <img id="portrait" src={portrait}></img>
          </div>
          <div id="about-me-text">
            <div id="about-me-title">
              <h2>About me</h2>
            </div>
            <hr className="subtitle-break" />
            <div id="about-me-body">
              <p>
                Hello! My name is Michael Sun and I'm a junior at Brown
                University studying Computational Biology with a focus on
                Computer Science.
              </p>
              <p>
                I'm interested in health related applications of computer
                science. Here are some of my recent projects and research
                areas!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="page-background">
        <div className="projects-container">
          <div className="page-title">
            <h2>Projects</h2>
          </div>
          <hr className="subtitle-break"></hr>
          <div className="project-display ">
            <ProjectComponent
              title="ClearMeds"
              description="Web app to help patients find and learn about generic name drugs based on the active ingredient(s) of a brand name, while taking into account patient allergies. Click to be redirected to Github"
              imageUrl={pills}
              githubUrl="https://github.com/cs0320-f23/term-project-tbui12-iyi3-ewang111-msun59"
              isClickable={true}
            />

            <ProjectComponent
              title="Travel Planner"
              description="Implemented Dijkstra's algorithm to determine the most optimal route between two locations depending on cost, time, or connecting stops"
              imageUrl={travel_planner}
              githubUrl="#"
              isClickable={false}
            />

            <ProjectComponent
              title="Search"
              description="Implemented a search program that utilizes the pagerank algorithm to search through XML documents and returning the top 10 most relevant pages based on relevance to the search query"
              imageUrl={search_bar}
              githubUrl="#"
              isClickable={false}
            />

            <ProjectComponent
              title="This Portfolio!"
              description="Built this portfolio from scratch using the React framework, Typescript, CSS and HTML"
              imageUrl={portfolio}
              githubUrl="#"
              isClickable={false}
            />
          </div>
        </div>
      </div>

      <div id="research" className="page-background">
        <div className="projects-container">
          <div className="page-title">
            <h2>Research</h2>
          </div>
          <hr className="subtitle-break"></hr>
          <div className="project-display">
            <ProjectComponent
              title="Lung cancer metabolism"
              description="Worked with the Guo Lab at the Cancer Institute of New Jersey to elucidate a mechanism by which G6PD maintains redox homeostasis in LKB1-Deficient KRAS driven lung cancer"
              imageUrl={lungs}
              githubUrl="#"
              isClickable={false}
            />

            <ProjectComponent
              title="Glioblastoma/Blood Brain Barrier"
              description="Studied the effect of 6-bromoindirubin-3’-acetoxime (BIA) on drug delivery to glioblastoma across the Blood-Brain barrier via downregulation of VE-Cadherin (CDH5)"
              imageUrl={brain}
              githubUrl="#"
              isClickable={false}
            />

            <ProjectComponent
              title="Pediatric DIPG"
              description="Developing a DESeq2 pipeline to analyze differentially expressed genes between the H3K27M and H3G34R mutatnts of Diffuse Intrinsic Pontine Gliomas (DIPG) in pediatric patients"
              imageUrl={brain}
              githubUrl="#"
              isClickable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
