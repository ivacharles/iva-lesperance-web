import React from 'react';
import { Container,Form, Row, Col, Button,} from 'react-bootstrap';
import { MdAlternateEmail } from "react-icons/md";
import { BsPinMap } from "react-icons/bs";

function ContactForm() {
    return (
        <Container  className="mx-center temp-height p-md-5 bg-secondary bg-opacity-25">
            <h2 className="text-center">Contact me</h2>
            
            <Form className="">
                <Row >
                    <Col  className="">
                        <Form.Group  className="mb-4" controlId="formGridFullName">
                            <Form.Control placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridFullName">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridFullName">
                            <Form.Control placeholder="Subject" />
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6} className="">

                        <Form.Group  controlId="formGridFullName">
                            <Form.Control as="textarea" placeholder="Your message" rows={6} />
                        </Form.Group>

                        <Button variant="secondary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Col>

                </Row>               
            </Form>
        </Container>
    );
  }

  export default ContactForm;