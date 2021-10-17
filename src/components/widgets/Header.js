import React from 'react';
import {  Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import { FiInstagram, FiLinkedin, FiGithub} from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";

function Header() {
  return (
          <Container className="bg-secondary py-0 " >
              <Navbar className="p-0">
                  <Container className="justify-content-end ">
                      <Nav activeKey="/home">
                          <Nav.Item>
                              <Nav.Link className="nav-link" target="_blank"  href="https://www.linkedin.com/in/ivalesperancecharles/"><FiLinkedin /></Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link className="nav-link" target="_blank"  href="https://github.com/ivacharles">< FiGithub /></Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link className="nav-link" target="_blank"  href="https://www.instagram.com/ivalesperancecharles/"><FiInstagram /></Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link className="nav-link" target="_blank"  href="https://discord.com/channels/@me/charlesiva#7307"><RiDiscordLine /></Nav.Link>
                          </Nav.Item>
                      </Nav>
                  </Container>
          </Navbar>
          <Navbar expand="lg" className="p-0">
              <Container className="justify-content-end ">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className="justify-content-end ms-auto" id="basic-navbar-nav">
                      <Nav variant="tabs" activeKey="/" >
                        <NavLink className="nav-link" exact  to="/" >About</NavLink>
                        <div className="vr" />

                        <NavLink className="nav-link"   to="/projects">Projects</NavLink>
                        <div className="vr" />

                        <NavLink className="nav-link"  to="/resume">Resume</NavLink>
                        <div className="vr" />

                        <NavLink className="nav-link"  to="/contact">Contact</NavLink>
                        <div className="vr" />

                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          </Container >
  );
}

export default Header;
