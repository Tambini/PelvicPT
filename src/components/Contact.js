import React, { Component } from "react";
import instagram from "../assets/Instagram.png";
import email from "../assets/email.png";
import ContactForm from "./ContactForm";
import {Container, Row, Stack } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div id="contacts" className="Location">
        <Container fluid id="googleMaps">
          <iframe
            id="googleMaps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2611123023494!2d-74.04366756881026!3d40.75628141320499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2577a4e3bffc1%3A0xf9497c5f7661b62c!2s421%207th%20St%2C%20Union%20City%2C%20NJ%2007087!5e0!3m2!1sen!2sus!4v1675537638668!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
        </Container>
        <div id="contactInfo">
          <Container fluid className="iconsImages">
            <Row id="locationTitleDiv">
              <div id="locationTitleDiv">
                <div id="lineLocation"></div>
                <p id="locationTitle">Contact Us</p>
                <div id="lineLocation"></div>
              </div>
            </Row>
            <Stack className="contactForm">
              <ContactForm />
            </Stack>
            <Stack direction="horizontal" className="socialRow" gap={3}>
              <a href="https://www.instagram.com/pelvicptrehab">
                <p className="iconText">social</p>
                <img className="icon" src={instagram} alt="instagram"></img>
              </a>
              <a href="mailto:info@pelvicptrehab.com?body=hi">
                <p className="iconText">email</p>
                <img className="icon" src={email} alt="email"></img>
              </a>
            </Stack>
                <div className="addressLocation">
                  <p>421 7th Street</p>
                  <p>Floor 2 </p>
                  <p>Union City, NJ 07030</p>
                </div>
                <div className="phoneNumber addressLocation">
                  <p>tel:201-864-1576</p>
                </div>
              
              <div id="locationTitleDiv">
              <div id="lineLocation"></div>
              <p id="locationTitle">Hours</p>
              <div id="lineLocation"></div>
              </div>
              <div id="hours">
                <p> Tuesday 9:00 am - 3:00 pm</p>
                <p>Thursday 9:00 am - 3:00 pm</p>
                <p>Saturday 9:00am-1:00pm</p>
              </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Contact;
