import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
 
} from "react-icons/di";
import {
  SiCsharp,
  SiPytorch,
  SiFirebase,
  SiMysql,
  SiOpencv,
  SiTypescript,
  SiDjango,
  SiDotnet,
  SiCplusplus,
  SiMicrosoftsqlserver,
  SiUnity,
  SiNumpy,
  SiFlutter,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiRedux,
  SiPandas,
  SiSqlite,
  SiAmazondynamodb,
  SiFlask,
  SiSwift,
  SiDart

} from "react-icons/si";
import {FaGitSquare} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>  

      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <FaGitSquare />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwift />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb/>
      </Col>
      
    </Row>
  );
}

export default Techstack;
