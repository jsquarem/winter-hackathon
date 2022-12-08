import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SlSocialTumblr, SlSocialYoutube } from "react-icons/sl"
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai"
import "./Footer.css"

export default function Footer() {
  return (
    <div>
      <Navbar className="footernav" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="brand" href="/"><img src="https://catcollection7-11.s3.us-east-2.amazonaws.com/teachaid-logo-dark.png" /></Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="https://tumblr.com"><SlSocialTumblr /></Nav.Link>
          <Nav.Link href="https://youtube.com"><SlSocialYoutube/></Nav.Link>
          <Nav.Link href="https://linkedin.com"><AiFillLinkedin/></Nav.Link>
          <Nav.Link href="https://facebook.com"><AiFillFacebook /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
