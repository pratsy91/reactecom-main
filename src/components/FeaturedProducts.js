import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useRouteLoaderData } from "react-router-dom";
import FormatPrice from "../util/FormatPrice";

const FeaturedProducts = () => {
  const token = useRouteLoaderData("token");
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getFeaturedProducts = async (url) => {
    setLoading(true);
    const response = await axios.get(url);
    setLoading(false);
    const data = await response.data;
    setProducts(data);
  };

  useEffect(() => {
    getFeaturedProducts("https://api.pujakaitem.com/api/products");
  }, []);

  const featuredProducts = products.filter((prod) => {
    return prod.featured === true;
  });

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner variant="primary" animation="border" />
      </div>
    );
  }

  return (
    <Container className="bg-light mb-3">
      <h3 className="mt-5 p-5 text-muted">Featured Products</h3>
      <Row className="justify-content-center g-4 " lg={3}>
        {featuredProducts.map((prod) => (
          <Col key={prod.id} className="mb-5">
            <Link
              to={token ? `/products/${prod.id}` : `/auth?mode=login`}
              className="text-decoration-none"
            >
              <Card>
                <Card.Img variant="top" src={prod.image} />
                <Card.Footer>
                  <span>{prod.name}</span>
                  <span className="offset-6 text-primary">
                    {<FormatPrice price={prod.price} />}
                  </span>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
