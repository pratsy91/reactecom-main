import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container
      style={{ marginTop: "200px" }}
      className="d-grid justify-content-center"
    >
      <h1 className="bg-danger  p-3 mb-3">Error 404</h1>
      <h3 className="text-muted">UH! OH YOU ARE LOST.</h3>
      <p>The page you are looking for does not exist.</p>
      <p>Click on the below button for Home Page.</p>
      <Link to="/">
        <Button variant="primary"> Home</Button>
      </Link>
    </Container>
  );
};

export default Error;
