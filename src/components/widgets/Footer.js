import React from 'react';
import Header from '../widgets/Header';
import { Container, Col } from 'react-bootstrap';
import ivaPict from '../picts/ivaPict.jpg';


function Footer() {
    return (
        <Container fluid="md">
            <Col>
                <Col xs={8} sm={8} md={5} lg={4}  xl={3} className="mb-3 ">
                    <Image src={ivaPict} thumbnail />
                </Col >
                <Col>
                    <h5>Interested in hiring me for your project?</h5>
                    <p>Looking for an experienced full-stack developer to build your web app or ship your software product? To start an initial chat, just drop me an email at steve.doe@youremail.com or use the form on the contact page.</p>   
                    <Button className=" border" variant="secondary">Let's Talk</Button>
                </Col>
            </Col>
        </Container>
    );
  }

  export default Footer;