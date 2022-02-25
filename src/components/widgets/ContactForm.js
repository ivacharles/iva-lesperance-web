import React from 'react';
import { useState} from 'react';
import { KEY_S, KEY_U, KEY_T } from '../../EmailConfigFile';
import { useForm } from 'react-hook-form';

import { Container, Form, Row, Col, Button,} from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [msg, setMsg] = useState(false);
    //read all formState values to subscribe to changes
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
      } = useForm();

      const onSubmit = (data, event) => {
            let name = event.target[0].value;
            let email = event.target[1].value;
            let subj = event.target[2].value;
            let message = event.target[3].value;
            if(Object.keys(name).length ===0
            || Object.keys(email).length ===0 
            || Object.keys(subj).length ===0 
            || Object.keys(message).length ===0 ){
                alert("all fields are requiered");
                setMsg(false);
            }
            if(Object.keys(name).length !==0
            && Object.keys(email).length !==0 
            && Object.keys(subj).length !==0 
            && Object.keys(message).length !==0 ){
            sendEmail(event);
          }
        };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(KEY_S, KEY_T, e.target, KEY_U)
          .then((result) => {
                setMsg(true);
                alert("Email was sent successfully")
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setMsg(null);
      };

    return (
        <Container  className="mx-center temp-height p-md-5 bg-secondary bg-opacity-25">
            <h2 className="text-center">Contact me</h2>
            {/* {msg?<p className="text-success text-center">Email was sent successfully</p>:<p className="text-danger text-center">all fiesld are requiered</p>} */}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row >
                    <Col  className="">
                        <Form.Group  className="mb-4" controlId="formGridFullName">
                            <Form.Control placeholder="full name" {...register('name', { required: true })}/>
                            {errors.name && <span className='text-danger'>Your name is required</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridFullName">
                            <Form.Control type="email" placeholder="Email"  {...register('email', { required: true })}/>
                            {errors.subject && <span className='text-danger'>Your email is required</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridFullName">
                            <Form.Control placeholder="Subject"  {...register('subject', { required: true })}/>
                            {errors.subject && <span className='text-danger'>Subject cannot be empty</span>}
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6} className="">

                        <Form.Group  controlId="formGridFullName">
                            <Form.Control as="textarea" placeholder="Your message" rows={6}  {...register('message', { required: true })}/>
                            {errors.message && <span className='text-danger'>Email message body is required</span>}
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