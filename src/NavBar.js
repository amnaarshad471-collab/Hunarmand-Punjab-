import React from "react";
import './NavBar.css';
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { BsBoxArrowRight } from "react-icons/bs";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar expand="lg" className="top-navbar py-2">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="align-items-center gap-3">
            <Nav.Link as={NavLink} to="/" className="Nav-Img">
              <img src="logo.png" alt="Logo" />
            </Nav.Link>

            <div className="nav-table align-items-center d-flex flex-wrap">
              <NavLink
                to="/Home"
                className={({ isActive }) =>
                  (isActive || currentPath === "/") ? "nav-item-link active" : "nav-item-link"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/Courses"
                className={({ isActive }) => isActive ? "nav-item-link active" : "nav-item-link"}
              >
                Courses
              </NavLink>

              <NavLink
                to="/Laptop"
                className={({ isActive }) => isActive ? "nav-item-link active" : "nav-item-link"}
              >
                Laptop<br />Scheme
              </NavLink>

              <NavLink
                to="/SolorScheme"
                className={({ isActive }) => isActive ? "nav-item-link active" : "nav-item-link"}
              >
                Solar<br />Scheme
              </NavLink>

              <NavLink
                to="/Scholarship"
                className={({ isActive }) => isActive ? "nav-item-link active" : "nav-item-link"}
              >
                Scholarship<br />Card
              </NavLink>

              <NavLink
                to="/Certificate"
                className={({ isActive }) => isActive ? "nav-item-link active" : "nav-item-link"}
              >
                Certificate
              </NavLink>

              <NavLink
                to="/About"
                className={({ isActive }) => isActive ? "nav-item-link active" : "nav-item-link"}
              >
                About Us
              </NavLink>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="nav-item-link dropdown-toggle with-arrow">
                  HELP DESK
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/Apply">How to Apply</Dropdown.Item>
                  <Dropdown.Item href="/FAQ">FAQs</Dropdown.Item>
                  <Dropdown.Item href="/ContactSection">Contact Us</Dropdown.Item>
                  <Dropdown.Item href="/News">Events & News</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>

          <div className="right-actions">
            <Nav.Link as={NavLink} to="/Login" className="login-link">
              <BsBoxArrowRight className="me-2" /> Candidate<br />Login
            </Nav.Link>
            <Button className="apply-btn">
              <Nav.Link as={NavLink} to="/ApplyNow">
               APPLY <br /> NOW
            </Nav.Link>
             </Button>
          </div>
        </Navbar.Collapse>
      </Container>

      <Outlet />
    </Navbar>
  );
};

export default NavBar;
