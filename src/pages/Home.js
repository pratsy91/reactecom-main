import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/services";
import HomeImage from "../images/hero.jpg";

const Home = () => {
  return (
    <Container className="d-grid justify-content-center " fluid>
      <Card style={{ marginTop: "150px" }} bg="light">
        <Row className="p-5 justify-content-center">
          <Col lg={4}>
            <h4>Welcome to</h4>
            <h1>Paras E-com</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              voluptatum blanditiis voluptatem quis vitae exercitationem sit
              repudiandae perferendis odio alias quia quasi, labore repudiandae
              rem vel omnis asperiores voluptas facere earum nisi quasi nostrum
              quis sed assumenda eius fugiat quo. Explicabo!
            </p>
            <NavLink to="/products">
              <Button variant="primary" className="me-3">
                Shop Now
              </Button>
            </NavLink>
          </Col>
          <Col lg={6}>
            <img
              src={HomeImage}
              alt="Family shopping"
              style={{ width: "500px" }}
              className=" img-fluid mt-3"
            />
          </Col>
        </Row>
      </Card>
      <FeaturedProducts />
      <Container className="d-none d-lg-block">
        <Services />
      </Container>
    </Container>
  );
};

export default Home;
