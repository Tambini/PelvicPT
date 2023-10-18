import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import { conditions } from "../components/ConditionsTreated.js";

const ContactForm = () => {
  const form = useRef();
  const [formSubmitState, updateFormState] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_faz6mv5",
        "template_u477hvd",
        form.current,
        "MYn900EZEf24S644G"
      )
      .then(
        (result) => {
          console.log(result.text);
          updateFormState(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      {formSubmitState === false && (
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Full name"
              type="text"
              name="from_name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="user_email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select treatment</Form.Label>
            <Form.Select name="topic_selected">
              <option menu>Select a treatment</option>
              {conditions.map((condition, i) => (
                <option>{condition}</option>
              ))}
              <option>Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" />
          </Form.Group>
          <Form.Group className="pt-1">
            <Button className="pt-1" variant="primary" type="submit">
              Send message
            </Button>
          </Form.Group>
        </Form>
      )} 
      { formSubmitState === true &&
        <center><h3 style={{padding: "auto"}}>Contact form submitted! Thank you.</h3></center>
      }
    </Container>
  );
};

export default ContactForm;
