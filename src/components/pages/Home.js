import React from 'react';
import Header from '../widgets/Header';
import { Card, Button, Image, Stack, Row, Navbar, Nav, Container, Figure, Col } from 'react-bootstrap';
import ivaPict from '../picts/ivaPict.jpg';
import Footer from '../widgets/Footer';


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
                <Col   md={12} lg={8} xl={8} className="mb-3  " >
                <h6>Hi, my name is</h6>
                <h5> Iva Lesperance Charles</h5>
                <p> I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your project? Check out my project case studies and resume.</p>
                <Button className=" border" variant="secondary">Hire me</Button>
            </Col>
            </Row>
        </Container>
      );
  }
  function ShowSkills() {
    return(
        <Container>
            <Row>
                <Row >
                    <h5>What Do I do</h5>
                    <p >I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?</p>
                </Row>
                <Row xs={1} md={3} className="g-4">
                    <col></col>
                    <col></col>
                    <col></col>
                </Row>
            </Row>
        </Container>
    );
}
  export default Home;
