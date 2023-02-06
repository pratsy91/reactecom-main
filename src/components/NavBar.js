import React from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import imageUrl from "../images/logo.png";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  const navigate = useNavigate();
  const navBarHandler = () => {
    navigate("/");
  };
  return (
    <Navbar bg="light" variant="light" fixed="top" expand="lg">
      <Navbar.Brand>
        <span>
          <img
            src={imageUrl}
            style={{ width: "100px", cursor: "pointer" }}
            alt="logo "
            className="ms-5"
            onClick={navBarHandler}
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
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
        <Nav className="ms-auto me-5">
          <Button variant="primary" className="mt-3">
            Login
          </Button>
        </Nav>
        <Nav className="me-5">
          <Button variant="warning" className="mt-3">
            <div>
              <FiShoppingCart />
              <span className="ms-1">
                <sup>
                  <Badge>2</Badge>
                </sup>
              </span>
            </div>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
