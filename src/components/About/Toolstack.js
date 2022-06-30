import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiSelenium,
  SiJira,
  SiJunit5,
  SiDocker,
  SiWireshark,
  SiSonarqube,
  SiJupyter,
  SiAndroidstudio,
  SiAnaconda,
  SiNpm

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{fontSize:28}}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize:28}}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize:28}}>POSTMAN</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p style={{fontSize:28}}>Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p style={{fontSize:28}}>Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
        <p style={{fontSize:28}}>Selenium</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p style={{fontSize:28}}>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJunit5 />
        <p style={{fontSize:28}}>JUnit 5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={{fontSize:28}}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
        <p style={{fontSize:28}}>WireShark</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube />
        <p style={{fontSize:28}}>SonarQube</p>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p style={{fontSize:28}}>Jupyter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <p style={{fontSize:28}}>Anaconda</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <p style={{fontSize:28}}>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
        <p style={{fontSize:28}}>NPM</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
