import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import ContactForm from '../widgets/ContactForm';


function Contact() {
    return (
        <Container fluid="md">
            <Header />
            <ContactForm />
            <Footer />
        </Container>
    );
  }

  export default Contact;
