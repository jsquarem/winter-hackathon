import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

export default function NavBar({ user, handleLogout }) {
  return (
    <Navbar className="headernav" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="https://catcollection7-11.s3.us-east-2.amazonaws.com/teachaid-logo-dark.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/getstarted">Get Started</Nav.Link>
            {user ? (
              <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/" onClick={handleLogout}>
                  Sign Out
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
