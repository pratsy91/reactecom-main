import React from "react";
import { Button, Col, ListGroup, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/CartSlice";
import { deleteCart, getCart, updateCart } from "../store/Requests";

const Cart = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.cartReducer.show);
  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);

  const handleClose = () => {
    dispatch(cartActions.CloseCart());
  };

  const deleteHandler = (id) => {
    dispatch(getCart());
    const existingProduct = cartProducts.find((prod) => {
      return prod.id === id;
    });
    if (existingProduct.quantity === 1) {
      dispatch(deleteCart(id));
    } else {
      const quantity = existingProduct.quantity - 1;
      const updatedProduct = { ...existingProduct, quantity: quantity };
      dispatch(updateCart(updatedProduct));
    }
    dispatch(getCart());
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as={Row}>
          {cartProducts.map((prod) => (
            <Row className=" justify-content-between mb-3" key={prod.id}>
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
                <h5>Quantity: {prod.quantity}</h5>
              </Col>
              <Col md={2} className="d-flex align-items-center">
                <Button variant="danger" onClick={() => deleteHandler(prod.id)}>
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </ListGroup>

        <Button variant="secondary" onClick={handleClose} className="mt-5">
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
