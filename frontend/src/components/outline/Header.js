import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Women United</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Locations</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav className="ms-auto my-2">
              <Navbar.Text>Click on the map to add a report</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
