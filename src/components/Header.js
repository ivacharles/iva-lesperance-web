import React from 'react';
import { Button, FigureImage, Stack, Row, Navbar, Nav, Container, Figure, Col } from 'react-bootstrap';
import ivaPict from '../picts/ivaPict.jpg';

function Header() {
  return (
    <Container  >
          <Container className="bg-secondary" >
              <Navbar >
                  <Container className="justify-content-end ms-auto">
                      <Nav activeKey="/home">
                          <Nav.Item>
                              <Nav.Link href="/home">In</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="link-1">GitHub</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="link-2">Insta</Nav.Link>
                          </Nav.Item>
                      </Nav>
                  </Container>
          </Navbar>
          <Navbar expand="lg">
              <Container className="justify-content-end">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className="justify-content-end ms-auto" id="basic-navbar-nav">
                      <Nav defaultActiveKey="/about" as="ul">

                          <Nav.Item as="li">
                              <Nav.Link href="/about" >About</Nav.Link>
                          </Nav.Item>
                          <div className="vr" />

                          <Nav.Item as="li">
                              <Nav.Link eventKey="#project">Projects</Nav.Link>
                          </Nav.Item>
                          <div className="vr" />

                          <Nav.Item as="li">
                              <Nav.Link eventKey="#resume">Resume</Nav.Link>
                          </Nav.Item>
                          <div className="vr" />

                          <Nav.Item as="li">
                              <Nav.Link eventKey="#contact">Contact</Nav.Link>
                          </Nav.Item>
                          <div className="vr" />

                          <Nav.Item as="li">
                              <Nav.Link eventKey="#blog">Blog</Nav.Link>
                          </Nav.Item>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          </Container >
          <Container fluid="md" className="p-5 bg-light" fluid>
                  <Row className="px-5 align-items-md-center ">
                      <Col md={12} lg={4} >
                          <Figure>
                              <Figure.Image
                                  width={191}
                                  height={200}
                                  alt="Iva profile 's picture"
                                  src={ivaPict}
                              />
                              <Figure.Caption>
                              </Figure.Caption>
                          </Figure>
                      </Col>
                      <Col lg={8} md={12} className="border">
                          <Stack gap={4} className="">
                              <h5>Hello, my name is </h5>
                              <h4>Iva Lesperance Charles</h4>
                              <p>I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your project? Check out my project case studies and resume.</p>
                            <Button as={Col} variant="secondary" md={4} xs={5} lg="3" sm={5} >Hire me</Button>
                          </Stack>
                    </Col>
                  </Row>
          </Container>
    </Container>
  );
}

export default Header;
