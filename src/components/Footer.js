import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDiscord, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <Row
        className="justify-content-center  text-white "
        style={{ backgroundColor: "black", width: "100%" }}
      >
        <Col lg={3} className="mt-3 offset-2">
          <p>Paras E-Com</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            illum!
          </p>
        </Col>
        <Col lg={3} className="mt-3">
          <p className="ms-3">Follow Us</p>
          <div>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              <FaDiscord className="me-3 " />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              <FaYoutube className="me-3 " />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              <FaFacebookF className="me-3 " />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              <FaInstagram className="me-3 " />
            </a>
          </div>
        </Col>
        <Col lg={3} className="mt-3">
          <p>Call Us</p>
          <p>+91 1234567890</p>
        </Col>
        <hr style={{ backgroundColor: "black" }} />
        <Row className="justify-content-evenly  offset-1">
          <Col lg={3}>
            <p>@{new Date().getFullYear()} ParasEcom. All Rights Reserved</p>
          </Col>
          <Col lg={3}>
            <p>Privacy Policy</p>
            <p>Terms and Conditions Apply</p>
          </Col>
        </Row>
      </Row>
    </React.Fragment>
  );
};

export default Footer;
