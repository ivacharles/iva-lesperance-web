import React from 'react';
import { Container, Col, Image,} from 'react-bootstrap';
import ivaPict from '../picts/ivaPict.jpg';
import {NavLink} from "react-router-dom";



function Footer() {
    return (
        <Container className=" bg-secondary text-center">
            <Col className="p-5" >
                <Col xs={4} sm={3} md={2} lg={1} xl={1} className="m-auto  mb-3 ">
                <Image  xs src={ivaPict} alt="iva lesperance headshot" roundedCircle fluid/>
                </Col >
                <Col className=" px-md-5">
                    <h5 className="fw-bold ">Interested in hiring me for your project?</h5>
                    <p >Looking for an experienced full-stack developer to build your web app or ship your software product? To start an initial chat, just drop me an email at <a href="mailto:ilesperance24@gmail.com" target="_blank" className="text-reset" rel="noreferrer noopener">ilesperance24@gmail.com</a> or use the form on the <NavLink className="nav-link"   to="/contact" className="text-reset">contact page.</NavLink> </p>   
                    <NavLink className="btn bg-light"   to="/contact" >Let's Talk</NavLink>
                </Col>
            </Col>
        </Container>
    );
  }

  export default Footer;