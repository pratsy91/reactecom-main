import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import FormatPrice from "../util/FormatPrice";

const Product = () => {
  const product = useLoaderData();
  const images = product.image;
  const [imageUrl, setImageUrl] = useState(images[0].url);

  const urlHandler = (url) => {
    setImageUrl(url);
  };

  return (
    <React.Fragment>
      <Row style={{ marginTop: "120px", marginBottom: "100px" }}>
        <Col lg={8} className="ms-5">
          <Row className="justify-content-evenly">
            <Col lg={3}>
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={image.id}
                  className="img-thumbnail"
                  onClick={() => urlHandler(image.url)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </Col>
            <Col lg={6}>
              <img
                src={imageUrl}
                alt="main"
                className="img-thumbnail "
                style={{ marginTop: "130px" }}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={3} style={{ marginTop: "80px" }}>
          <h1>{product.name}</h1>
          <p>{<FormatPrice price={product.price} />}</p>
          <p>{product.description}</p>
          <hr />
          <p>Available: {product.stock}</p>
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    className="w-75"
                    defaultValue="1"
                    max={product.stock}
                    min="1"
                  />
                </Col>

                <Col>
                  <Button variant="warning" className="mt-4">
                    Add to Cart
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Product;

export async function productLoader({ params }) {
  const id = params.productId;
  const response = await fetch(`https://api.pujakaitem.com/api/products/${id}`);
  const data = await response.json();
  return data;
}
