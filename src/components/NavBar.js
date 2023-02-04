import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import imageUrl from "../images/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>
        <span>
          <img
            src={imageUrl}
            style={{ width: "100px" }}
            alt="logo "
            className="ms-5"
          />
        </span>
      </Navbar.Brand>

      <Nav className="offset-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-decoration-none text-primary me-3"
              : "text-decoration-none text-dark me-3"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-decoration-none text-primary me-3"
              : "text-decoration-none text-dark me-3"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-decoration-none text-primary me-3"
              : "text-decoration-none text-dark me-3"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "text-decoration-none text-primary me-3"
              : "text-decoration-none text-dark me-3"
          }
        >
          Contact Us
        </NavLink>
      </Nav>
      <Button variant="primary" className="ms-auto me-5">
        Login
      </Button>
    </Navbar>
  );
};

export default NavBar;
