import React from 'react';
import Header from '../widgets/Header';
import { Image, Row, Container, Col } from 'react-bootstrap';
import ivaPict from '../picts/ivaPict.jpg';
import Footer from '../widgets/Footer';
import { SiWordpress,SiSwagger,SiPostman,SiInsomnia, SiPostgresql, SiReact,SiSequelize, SiSpeedtest,SiAzuredevops, SiCsharp, SiJava, SiSpring,SiBootstrap, SiExpress} from "react-icons/si";
import { DiJavascript1, DiJqueryLogo} from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { RiCodeLine, RiHtml5Line,RiGithubLine, RiDatabase2Line, RiCss3Fill,RiFlutterLine } from "react-icons/ri";
import { MdOutlineWebAsset } from "react-icons/md";
import { FaGitAlt } from "react-icons/fa";
import {NavLink} from "react-router-dom";


function Home() {
    return (
        <Container fluid="md">
            <Header />
            <HomeShowcase />
            <ShowSkills />
            <Footer />
        </Container>
    );
  }

  function HomeShowcase(){
      return(
        <Container className="p-md-5 bg-secondary bg-opacity-25 " >
            <Row className="p-md-5  justify-content-sm-center  mb-3">
                <Col xs={8} sm={8} md={5} lg={4}  xl={3} className="mb-3 ">
                <Image src={ivaPict} thumbnail />
                </Col >
                <Col md={12} lg={8} xl={8} className="mb-3" >
                <h6>Hey There! Glad you're here</h6>
                <h5> My name is Iva Lesperance Charles</h5>
                <p>Welcome to my website. I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I am proficient in various backend technologies such as C#, Java, Spring Framework, and Express.js. For front end, I use React.js, Flutter, Javascript, Node.js, jQuery, CSS, HTML. Want to know how I may help your project? Check out <NavLink className="nav-link"   to="/projects" className="text-reset">my project case studies</NavLink> and <NavLink className="nav-link"   to="/resume" className="text-reset">resume.</NavLink></p>
                <NavLink className="btn btn-secondary"   to="/contact" >Hire me</NavLink>
            </Col>
            </Row>
        </Container>
      );
  }
  function ShowSkills() {
    return(
        <Container className="py-5 bg-light">
            <Row className="mx-auto">
                    <h4 className=" text-center my-0">Skills Overview</h4>
                <Row xs={1}  sm={1} md={1} lg={4} xl={4} className="mx-auto justify-content-evenly g-5">
                    <Card2ShowFrontendSkill />
                    <Card2ShowBackendSkill />
                    <Card2ShowOtherSkill />
                </Row>
            </Row>
        </Container>
    );
}

function Card2ShowFrontendSkill(props) {
    return (
        <Container className="py-5 bg-white border position-relative mx-3">
            <Row variant="" className="bg-secondary text-white position-absolute top-0 start-50 translate-middle">
                <h4>Frontend</h4>
            </Row>
            <Row className="mx-md-stat">
                <Row>
                    <Col xs={1} md={1} lg={2}>
                    <SiReact /> 
                    </Col>
                    <Col>
                        <h5>  React.js</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <DiJavascript1 />
                    </Col>
                    <Col>
                        <h5>Javascript</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <IoLogoNodejs />
                    </Col>
                    <Col>
                        <h5>  Node.js</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <RiFlutterLine />
                    </Col>
                    <Col>
                        <h5>  Flutter</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiBootstrap />
                    </Col>
                    <Col>
                        <h5>Bootstrap</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <DiJqueryLogo />
                    </Col>
                    <Col>
                        <h5>jQuery</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <RiHtml5Line />
                    </Col>
                    <Col>
                        <h5> HTML </h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <RiCss3Fill />
                    </Col>
                    <Col>
                        <h5> CSS/SASS </h5>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
  }

function Card2ShowBackendSkill(props) {
    return (
        <Container className="py-5 bg-white border position-relative  mx-3">
            <Row variant="" className="bg-secondary text-white position-absolute top-0 start-50 translate-middle">
                <h4>Backend</h4>
            </Row>
            <Row className="mx-md-stat">
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiCsharp />
                    </Col>
                    <Col>
                        <h5>  C#</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiJava />
                    </Col>
                    <Col>
                        <h5>  Java</h5>
                    </Col>
                </Row>
               
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiSpring />
                    </Col>
                    <Col>
                        <h5>Spring Framework  </h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiExpress />
                    </Col>
                    <Col>
                        <h5>  Express.js</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiSequelize />
                    </Col>
                    <Col>
                        <h5>  Sequelize.js</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <RiDatabase2Line />
                    </Col>
                    <Col>
                        <h5> MySQL </h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiPostgresql />
                    </Col>
                    <Col>
                        <h5>  Postgresql </h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiWordpress />
                    </Col>
                    <Col>
                        <h5>  Wordpress</h5>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
  }

  function Card2ShowOtherSkill(props) {
    return (
        <Container className="py-5 bg-white border position-relative mx-3">
            <Row variant="" className="bg-secondary text-white position-absolute top-0 start-50 translate-middle">
                <h4>Others</h4>
            </Row>
            <Row className="mx-md-stat">
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiAzuredevops />
                    </Col>
                    <Col>
                        <h5>DevOps</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        < FaGitAlt />
                    </Col>
                    <Col>
                        <h5>Git</h5>
                    </Col>
                </Row>   
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiSpeedtest />
                    </Col>
                    <Col>
                        <h5>  Unit Testing</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <MdOutlineWebAsset />
                    </Col>
                    <Col>
                        <h5>  Archibus</h5>
                    </Col>
                </Row>                
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiInsomnia />
                    </Col>
                    <Col>
                        <h5>Insomnia</h5>
                    </Col>
                </Row>     
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiPostman />
                    </Col>
                    <Col>
                        <h5>Postman</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiSwagger />
                    </Col>
                    <Col>
                        <h5>Swagger</h5>
                    </Col>
                </Row>        
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <RiCodeLine />
                    </Col>
                    <Col>
                        <h5>VS Code / Intellij</h5>
                    </Col>
                </Row>     
                
            </Row>
        </Container>
    );
  }
  export default Home;
