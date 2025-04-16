import React from "react";
import "./Header.css";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import Logo from "../../assets/react.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Container fluid="md">
        <Row>
          <Col sm={2}>
            <Link to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
          </Col>

          <Col sm={8}>
            <Nav className="nav-box">
              <NavLink className="nav-item" to="/">
                Home
              </NavLink>
              <NavLink className="nav-item" to="/about">
                About
              </NavLink>
              <NavLink className="nav-item" to="/posts">
                Posts
              </NavLink>
              <NavLink className="nav-item" to="/contact">
                Contact
              </NavLink>
            </Nav>
          </Col>

          <Col sm={2}>
            <Button variant="primary" size="sm" active>
              Primary button
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
