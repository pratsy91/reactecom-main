import { useLoaderData } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import FormatPrice from "../util/FormatPrice";
import { useDispatch, useSelector } from "react-redux";
import { getCart, sendCart, updateCart } from "../store/Requests";

const Product = () => {
  const dispatch = useDispatch();
  const product = useLoaderData();
  const images = product.image;
  const image = images[0].url;
  const [imageUrl, setImageUrl] = useState(images[0].url);
  const quantityRef = useRef();
  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);

  const urlHandler = (url) => {
    setImageUrl(url);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputQuantity = parseInt(quantityRef.current.value);
    const newProduct = {
      id: product.id,
      image: image,
      quantity: inputQuantity,
      name: product.name,
    };

    if (cartProducts.length === 0) {
      dispatch(sendCart(newProduct));
    } else {
      const existingProduct = cartProducts.find((prod) => {
        return prod.id === newProduct.id;
      });
      if (!existingProduct) {
        dispatch(sendCart(newProduct));
      } else {
        const quantity = existingProduct.quantity + newProduct.quantity;
        const updatedProduct = { ...newProduct, quantity: quantity };
        dispatch(updateCart(updatedProduct));
      }
    }
  };

  const addHandler = () => {
    dispatch(getCart());
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
            <Form onSubmit={submitHandler}>
              <Row>
                <Col>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    className="w-75"
                    defaultValue="1"
                    max={product.stock}
                    min="1"
                    ref={quantityRef}
                  />
                </Col>

                <Col>
                  <Button
                    variant="warning"
                    className="mt-4"
                    type="submit"
                    onClick={addHandler}
                  >
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
