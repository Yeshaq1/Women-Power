import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>WOMEN UNITED</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Text className="py-2">
              Select any location on the map to add a report
            </Navbar.Text>
            <Nav className="ms-auto">
              <Button variant="outline-danger">Danger</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
