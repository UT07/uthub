import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Utkarsh Singh </span>
            from <span className="purple"> New Delhi, India</span> and currently located in <span className="purple"> Dallas, TX.</span>
            <br />I am a senior pursuing <span className="purple"> Bachelor</span> of<span className="purple"> Science</span> in <span className="purple"> Software Engineering</span> from <span className="purple"> University of Texas, Arlington</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games and watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Skateboarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring the nature
            </li>
          </ul>

          <p style={{ textAlign: "justify",color: "rgb(155 126 172)" }}>
            "If you do not believe in yourself, no one will do it for you."{" "}
          </p>
          <footer className="blockquote-footer">Kobe Bryant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
