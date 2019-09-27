import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand className="" href="#home">
        <img
          src="http://secureservercdn.net/198.71.233.44/p0p.eba.myftpupload.com/wp-content/uploads/2019/07/litelifeTV.png"
          width="175vh"
          height="175vh"
          className="d-inline-block align-top"
          alt="LLTV logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home">
              <a className="nav-links">INTRO</a>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="expertise">
              <span className="nav-links">EXPERTISE</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="awards">
              <span className="nav-links">AWARDS</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="classes">
              <span className="nav-links">CLASSES</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="privateClasses">
              <span className="nav-links">PRIVATE CLASSES</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">
              <span className="nav-links">REVIEWS</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contact">
              <span className="nav-links">CONTACT</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
