import React from 'react';
import { Container ,} from 'react-bootstrap';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import { FaLaptopCode } from "react-icons/fa";



function Projects() {
    return (
        <Container fluid="md">
            <Header />
            <Container className="temp-height text-center p-md-5 bg-secondary bg-opacity-25">
                <FaLaptopCode size={150} />
                <h3>This page is under construction.</h3>
                <h5>To see my projects, including what I am working on now, visit my GitHub repos.</h5>
            </Container>
            <Footer />
        </Container>
    );
  }

  export default Projects;
