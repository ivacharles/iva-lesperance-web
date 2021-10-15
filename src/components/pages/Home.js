import React from 'react';
import Header from '../widgets/Header';
import { Button, Image, Stack, Row, Navbar, Nav, Container, Figure, Col } from 'react-bootstrap';
import ivaPict from '../picts/ivaPict.jpg';
import Footer from '../widgets/Footer';
import { SiHtml5, SiCss3, SiWordpress, SiReact, SiSpeedtest,SiAzuredevops, SiCsharp, SiJava, SiSpring, SiExpress} from "react-icons/si";
import { DiJavascript1, DiJqueryLogo} from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { RiHtml5Line, RiDatabase2Line, RiCss3Fill,RiFlutterLine } from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";
import { MdOutlineWebAsset, MdOutlineKeyboardArrowRight } from "react-icons/md";
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
        <Container className="p-md-5 bg-light " >
            <Row className="p-md-5  justify-content-sm-center  mb-3">
                <Col xs={8} sm={8} md={5} lg={4}  xl={3} className="mb-3 ">
                <Image src={ivaPict} thumbnail />
                </Col >
                <Col md={12} lg={8} xl={8} className="mb-3" >
                <h6>Hi, my name is</h6>
                <h5> Iva Lesperance Charles</h5>
                <p> I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I am proficient in various backend technologies such as C++, C#, Java, Spring Framework, and Flutter. For front end, I use React.js, Javascript, Node.js, jQuery, CSS, HTML. Want to know how I may help your project? Check out <NavLink className="nav-link"   to="/projects" className="text-reset">my project case studies</NavLink> and <NavLink className="nav-link"   to="/resume" className="text-reset">resume.</NavLink></p>
                <Button className=" border" variant="secondary">Hire me</Button>
            </Col>
            </Row>
        </Container>
      );
  }
  function ShowSkills() {
    return(
        <Container className=" border py-5">
            <Row className="mx-auto">
                <Row className=" text-center ">
                    <h5>Skills Overview</h5>
                    <p >I have more than few years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?</p>
                </Row>
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
        <Container className="py-5 bg-light position-relative mx-3">
            <Row variant="" className="bg-primary text-white position-absolute top-0 start-50 translate-middle">
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
                        <DiJqueryLogo />
                    </Col>
                    <Col>
                        <h5>  jQuery</h5>
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
                        <h5>  CSS/SASS </h5>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
  }

function Card2ShowBackendSkill(props) {
    return (
        <Container className="py-5 bg-light position-relative  mx-3">
            <Row variant="" className="bg-primary text-white position-absolute top-0 start-50 translate-middle">
                <h4>Backend</h4>
            </Row>
            <Row className="mx-md-stat">
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <CgCPlusPlus />
                    </Col>
                    <Col>
                        <h5>  C++</h5>
                    </Col>
                </Row>
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
                        <RiFlutterLine />
                    </Col>
                    <Col>
                        <h5>  Flutter</h5>
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
            </Row>
        </Container>
    );
  }

  function Card2ShowOtherSkill(props) {
    return (
        <Container className="py-5 bg-light position-relative mx-3">
            <Row variant="" className="bg-primary text-white position-absolute top-0 start-50 translate-middle">
                <h4>Others</h4>
            </Row>
            <Row className="mx-md-stat">
                <Row>
                    <Col xs={1} md={1} lg={2}>
                        <SiAzuredevops />
                    </Col>
                    <Col>
                        <h5>  DevOps</h5>
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
                        <SiWordpress />
                    </Col>
                    <Col>
                        <h5>  Wordpress</h5>
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
                        <RiDatabase2Line />
                    </Col>
                    <Col>
                        <h5>  MsSQL </h5>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
  }
  export default Home;
