import React from "react";
import { Card, Container } from "react-bootstrap";
import imageUrl from "../images/shopping.jpg";

const About = () => {
  return (
    <React.Fragment>
      <Container
        style={{ width: "1200px", marginTop: "120px" }}
        className="mb-5 "
      >
        <Card bg="light" className="p-5">
          <Card.Header className="text-center">
            <h4 className="p-3 text-dark">
              Making commerce better for everyone
            </h4>
            <h5 className="p-3 text-dark">
              We help people achieve independence by making it easier to start,
              run, and grow a business. We believe the future of commerce has
              more voices, not fewer, so we’re reducing the barriers to business
              ownership to make commerce better for everyone.
            </h5>
          </Card.Header>
          <Card.Img src={imageUrl} className="img-rounded" />
          <Card.Body></Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default About;
