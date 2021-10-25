import React from 'react';
import { Container,Figure, Row, Col, } from 'react-bootstrap';
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import {NavLink} from "react-router-dom";

function Cv() {
    return (
        <Container className=" temp-height p-md-5 bg-secondary bg-opacity-25">
            <Row xs={1}  sm={1} md={1} lg={2} xl={2} className="mx-auto justify-content-evenly g-5">
                <Col><Education /></Col>
                <Col><Experiences /></Col>
            </Row>
            <Row lg={5} className="justify-content-center mx-auto">
            <NavLink className="btn btn-secondary my-3"   to="/projects" >See my accomplishments</NavLink>
            </Row>
        </Container>
    );
  }

  function Education(){
    return (
        <Container className="py-2 bg-white border position-relative">
        <Row>
            <h4 ><GiGraduateCap />  Education </h4>
            <h6 className="bg-secondary text-white">May 2022</h6>
            <Figure>
                <h6>Bachelor of Technology in Computer Systems Technology</h6>
                <Figure.Caption>New York City College of Technology - City Tech</Figure.Caption>
            </Figure>
            <h6 className="bg-secondary text-white">June 2020</h6>
            <Figure>
                <h6>Associate of Applied Science in Computer Information System</h6>
                <Figure.Caption>Kingsborough Community College - KCC</Figure.Caption>
            </Figure>
        </Row>
    </Container>
    );
  }
  function Experiences(){
    return (
        <Container className="py-2 bg-white border position-relative">
        <Row>
            <h4 ><MdWork /> Relevant  Experience </h4>
            <h6 className="bg-secondary text-white">May 2022</h6>
            <Figure>
                <h6>CUNY Tech Prep <br/><i>Fellow, Software Development</i></h6>
                <Figure.Caption>Learn in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & Scrum with Trello and Slack, test-driven development, and CI/CD</Figure.Caption>
            </Figure>
        </Row>
    </Container>
    );
  }



  export default Cv;