import React from 'react';
import { Container, } from 'react-bootstrap';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import { FaLaptopCode } from "react-icons/fa";


function Services() {
    return (
        <Container fluid="md">
            <Header />
            <Container className="temp-height text-center p-md-5 bg-secondary bg-opacity-25">
                <FaLaptopCode size={150} />
                <h3>This page is under construction.</h3>
            </Container>
            <Footer />
        </Container>
    );
  }

  export default Services;
