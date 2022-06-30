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
  SiAmazonaws,
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
        <p style={{fontSize:28}}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize:28}}>JavaScript</p>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize:28}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p style={{fontSize:28}}>Redux</p>        
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize:28}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize:28}}>NodeJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={{fontSize:28}}>AWS Cloud</p>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{fontSize:28}}>HTML5</p>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={{fontSize:28}}>CSS3</p>
      </Col>  

      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython/>
        <p style={{fontSize:28}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <p style={{fontSize:28}}>OpenCV</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <p style={{fontSize:28}}>PyTorch</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <p style={{fontSize:28}}>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p style={{fontSize:28}}>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy/>
        <p style={{fontSize:28}}>Numpy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p style={{fontSize:28}}>Flask</p>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <p style={{fontSize:28}}>C#</p>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <p style={{fontSize:28}}>.NET </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <p style={{fontSize:28}}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
        <p style={{fontSize:28}}>MS SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
        <p style={{fontSize:28}}>Unity</p>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <FaGitSquare />
        <p style={{fontSize:28}}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{fontSize:28}}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{fontSize:28}}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <p style={{fontSize:28}}>Flutter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
        <p style={{fontSize:28}}>Dart</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwift />
        <p style={{fontSize:28}}>Swift</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{fontSize:28}}>PostgreSQL</p>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <p style={{fontSize:28}}>SQLite 3</p>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb/>
        <p style={{fontSize:28}}>AWS DynamoDB</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
