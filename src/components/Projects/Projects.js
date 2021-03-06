import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Wabble from "../../Assets/Projects/wordle.gif";
import lightlib from "../../Assets/Projects/lightlib-lms.png";
import carz3330 from "../../Assets/Projects/carz3330.png";
import yourmeals from "../../Assets/Projects/yourmeals.gif";
import Cryptomania from "../../Assets/Projects/cryptomania.png";
import demo from "../../Assets/Projects/Demo.gif";
import statify from '../../Assets/Projects/statify.png';
import shlack from '../../Assets/Projects/shlack.png';
import utube from '../../Assets/Projects/ut-tube.png';
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few applications I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={statify}
              isBlog={false}
              title="Statify"
              description="Statify is a website that allows users to examine their Spotify account statistics, including Top Songs, Favorite Artists, Top Genres, Recommendations, and a visual depiction of all of the above in form of graphs and charts."
              link="https://statify-tool.herokuapp.com/ "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carz3330}
              isBlog={false}
              title="Carz 3330"
              description="▪ Developed a full-stack web application that enables users to rent a car and manage bookings. Application also allows vendors to manage the car inventory and request maintenance on over 500 vehicles."
              link="https://carz3330.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cryptomania}
              isBlog={false}
              title="Cryptomania"
              description="Implemented a GitHub hosted data visualization cryptocurrency web application that retrieves data from real-time cryptocurrency pricing API and made a time-series analysis graph for the selected coins."
              link="https://crypto-mania.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={utube}
              isBlog={false}
              title="UT-Tube"
              description="Developing a live Github hosted Youtube downloader, using React, JavaScript, HTML5, CSS3, Youtube Data v3 API."
              link="https://ut-tube.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shlack}
              isBlog={false}
              title="Shlack"
              description="Shlack is a agile communication application made with React, Redux and Firebase which sends and receives messages instantly to other users in the chat. It also shows when users are online and offline"
              link="https://shlack-d0d44.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lightlib}
              isBlog={false}
              title="Lightlib LMS"
              description="A lightweight library management system built in .NET 5.0 with Entity Framework Core. Enables library administrators to manage Library Assets, Patrons, and Branches with basic functionality. This project is intended to serve as a long-term resource for small .NET web monoliths."
              link="https://github.com/UT07/lightlib-lms"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={demo}
              isBlog={false}
              title="COVID-19 Tracker Application"
              description="Collaborated in a cross platform COVID-19 guide for both android and iOS devices that displays the global and nation-wide statistics of SARS-CoV-2 virus. The application has additional features such as identifying the symptoms and suggesting preventive measures, donation links to verified relief funds, and SOS calling options to the emergency services."
              link="https://github.com/CSE-3310-Team-6/Covid19TrackerAppFinal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wabble}
              isBlog={false}
              title="Wabble"
              description="Wabble is a cross platform android and iOS puzzle solving game made on Flutter. In the game, user will have 6 guesses to solve the word of the day. Each time user get a letter correct, the tile will turn yellow if it is in the word or green if it is in the right spot."
              link="https://github.com/UT07/Wabble"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yourmeals}
              isBlog={false}
              title="Your Meals"
              description="A flutter app that has recipes of famous food around the world, you can filter meals according to your preferences and restriction as well as highlight your favorite dishes."
              link="https://github.com/UT07/yourmeals"
            />
          </Col>
          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
