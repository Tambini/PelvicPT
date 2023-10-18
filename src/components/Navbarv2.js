import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { Col } from "react-bootstrap";

const NavbarV2 = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Col xs={9} sm={8}>
            <Navbar.Brand href="/"><img src={logo} alt="Pelvic PT Rehab" /></Navbar.Brand>
        </Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#aboutTitle">About</Nav.Link>
              <Nav.Link href="#conditionsTreated">Conditions Treated</Nav.Link>
              <Nav.Link href="#FAQs">FAQs</Nav.Link>
              <Nav.Link href="#contacts">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarV2;
