import React from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { NavLink, useNavigate, useRouteLoaderData } from "react-router-dom";
import imageUrl from "../images/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartSlice";
import { getCart } from "../store/Requests";

const NavBar = () => {
  const dispatch = useDispatch();
  const token = useRouteLoaderData("token");
  const navigate = useNavigate();
  const navBarHandler = () => {
    navigate("/");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/auth?mode=login");
  };

  const showCart = () => {
    dispatch(cartActions.showCart());
    dispatch(getCart());
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
        {!token && (
          <NavLink to="/auth?mode=login" className="ms-auto me-5">
            <Button variant="primary">Login</Button>
          </NavLink>
        )}
        {token && (
          <Button
            variant="danger"
            className="ms-auto me-3"
            onClick={logoutHandler}
          >
            Logout
          </Button>
        )}

        {token && (
          <Nav className="me-5 mb-3">
            <Button variant="warning" className="mt-3" onClick={showCart}>
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
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
