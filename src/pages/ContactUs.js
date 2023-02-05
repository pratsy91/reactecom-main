import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <React.Fragment>
      <h1
        style={{ marginTop: "100px" }}
        className="text-center mb-5 text-secondary"
      >
        Feel free to Contact Us
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3995944509716!2d74.61910455528749!3d24.884347913592748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a040c97ec1e5%3A0x9fa1e6dd3e4c394d!2sKumbha%20Nagar%2C%20Chittorgarh%2C%20Rajasthan%20312001!5e0!3m2!1sen!2sin!4v1675577677542!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0, width: "100%" }}
        title="map"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <Container className="w-25 mt-5 mb-5">
        <Form action="https://formspree.io/f/xyyakqrv" method="POST">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            className="mb-4"
            name="username"
          />
          <Form.Control
            type="email"
            placeholder="Enter Email"
            className="mb-4"
            name="email"
          />
          <Form.Control
            as="textarea"
            placeholder="Details"
            className="mb-4"
            rows={5}
            name="details"
          />
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default ContactUs;
