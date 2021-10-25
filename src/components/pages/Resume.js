import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../widgets/Header';
import Cv from '../widgets/Cv';
import Footer from '../widgets/Footer';


function Resume() {
    return (
        <Container fluid="md">
            <Header />
            <Cv />
            <Footer />
        </Container>
    );
  }

  export default Resume;
