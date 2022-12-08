import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return <div><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/"><img src="https://catcollection7-11.s3.us-east-2.amazonaws.com/teachaid-logo-dark.png" /></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>;
}
