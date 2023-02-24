import React, { useState } from "react";
import { Button, Col, Container, ListGroup, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/CartSlice";
import {
  deleteCart,
  deleteCartBack,
  getCart,
  updateCart,
} from "../store/Requests";
import imageUrl from "../images/green.png";
import emptyImage from "../images/emptycart.png";

const Cart = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.cartReducer.show);
  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);
  const [purchase, setPurchase] = useState(false);
  console.log("🚀 ~ file: CartModal.js:13 ~ Cart ~ purchase:", purchase);

  const handleClose = () => {
    dispatch(cartActions.CloseCart());
    setPurchase(false);
    dispatch(getCart());
  };

  const deleteHandler = (id) => {
    dispatch(getCart());
    const existingProduct = cartProducts.find((prod) => {
      return prod.id === id;
    });
    if (existingProduct.quantity === 1) {
      dispatch(deleteCart(id));
      dispatch(getCart());
    } else {
      const quantity = existingProduct.quantity - 1;
      const updatedProduct = { ...existingProduct, quantity: quantity };
      dispatch(updateCart(updatedProduct));
      dispatch(getCart());
    }
  };

  const addHandler = (id) => {
    dispatch(getCart());

    const existingProduct = cartProducts.find((prod) => {
      return prod.id === id;
    });
    const quantity = existingProduct.quantity + 1;
    const updatedProduct = { ...existingProduct, quantity: quantity };
    dispatch(updateCart(updatedProduct));
    dispatch(getCart());
  };

  const purchaseHandler = () => {
    dispatch(deleteCartBack());
    setPurchase(true);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <Container className="d-flex justify-content-center">
          {!purchase && cartProducts.length === 0 && (
            <div>
              <img
                src={emptyImage}
                alt="tick"
                className=" img-thumbnail "
                style={{ width: "400px" }}
              />
              <h3 className="mt-3 offset-2 text-primary">Your Cart is Empty</h3>
            </div>
          )}
        </Container>
        <Container className="d-flex justify-content-center">
          {purchase && (
            <div>
              <img
                src={imageUrl}
                alt="tick"
                className=" img-thumbnail "
                style={{ width: "400px" }}
              />
              <h3 className="mt-3 offset-2 text-primary">
                Your Order is Placed
              </h3>
            </div>
          )}
        </Container>

        <ListGroup as={Row}>
          {!purchase &&
            cartProducts.length > 0 &&
            cartProducts.map((prod) => (
              <Row className=" justify-content-between mb-3" key={prod}>
                <Col md={4}>
                  <img
                    src={prod.image}
                    alt="name"
                    className="img-thumbnail w-75"
                  />
                </Col>
                <Col md={2} className="d-flex align-items-center">
                  <h5>{prod.name}</h5>
                </Col>
                <Col md={2} className="d-flex align-items-center">
                  <h5>
                    Quantity:
                    <Button
                      variant="danger"
                      onClick={() => deleteHandler(prod.id)}
                      className="me-1 mt-2"
                    >
                      -
                    </Button>
                    {prod.quantity}
                    <Button
                      variant="danger"
                      onClick={() => addHandler(prod.id)}
                      className="ms-1 mt-2"
                    >
                      +
                    </Button>
                  </h5>
                </Col>
              </Row>
            ))}
        </ListGroup>
        <hr />
        <Container className="offset-8">
          {!purchase && cartProducts.length > 0 && (
            <Button variant="warning" onClick={purchaseHandler}>
              Purchase
            </Button>
          )}

          <Button variant="primary" onClick={handleClose} className="offset-1">
            {purchase ? "Continue Shopping" : "Close"}
          </Button>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
