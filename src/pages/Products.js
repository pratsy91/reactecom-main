import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendCart, updateCart } from "../store/Requests";
import FormatPrice from "../util/FormatPrice";

const Products = () => {
  const isLoading = useSelector((state) => state.getProductReducer.isLoading);
  console.log("🚀 ~ file: Products.js:19 ~ Products ~ isLoading:", isLoading);
  const loadedproducts = useSelector(
    (state) => state.getProductReducer.products
  );

  const [products, setProducts] = useState(loadedproducts);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);

  const selectRef = useRef();
  const filterRef = useRef();

  const category = ["All", "mobile", "laptop", "accessories", "watch"];

  const filterHandler = () => {
    const cat = filterRef.current.value;
    if (cat && cat !== "All") {
      const filteredProducts = loadedproducts.filter((prod) => {
        return prod.category === cat;
      });
      setProducts(filteredProducts);
      selectRef.current.value = "default";
    } else {
      setProducts(loadedproducts);
      selectRef.current.value = "default";
    }
  };

  function comparelh(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
  function comparehl(a, b) {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return 1;
    }
    return 0;
  }

  const submitHandler = () => {
    const inputSelect = selectRef.current.value;
    if (inputSelect === "name-low") {
      const newArray = products.slice();
      const sortedProducts = newArray.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setProducts(sortedProducts);
    } else if (inputSelect === "name-high") {
      const newArray = products.slice();
      const sortedProducts = newArray.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setProducts(sortedProducts);
    } else if (inputSelect === "price-low") {
      const newArray = products.slice();
      const sortedProducts = newArray.sort(comparelh);
      setProducts(sortedProducts);
    } else if (inputSelect === "price-high") {
      const newArray = products.slice();
      const sortedProducts = newArray.sort(comparehl);
      setProducts(sortedProducts);
    }
  };

  const addHandler = (product) => {
    const newProduct = {
      id: product.id,
      image: product.image,
      quantity: 1,
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

  const clearFilterHandler = () => {
    filterRef.current.value = category[0];

    selectRef.current.value = "default";
    setProducts(loadedproducts);
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner variant="primary" animation="border" />
      </div>
    );
  }

  return (
    <React.Fragment>
      <Row className="justify-content-evenly">
        <Col lg={2}>
          <Card
            style={{ width: "250px", marginTop: "180px" }}
            bg="light"
            className="mb-5"
          >
            <Container className="p-5">
              <h5 className=" offset-3 mb-5">Category</h5>

              <Form.Select
                className="w-100 m-3 ms-auto"
                onChange={filterHandler}
                ref={filterRef}
              >
                {!isLoading &&
                  category.map((cat) => (
                    <option value={cat} key={cat}>
                      {cat}
                    </option>
                  ))}
              </Form.Select>
            </Container>
            <h5
              className="text-center mb-4 text-danger"
              style={{ cursor: "pointer" }}
              onClick={clearFilterHandler}
            >
              Clear All Filters
            </h5>
          </Card>
        </Col>
        <Col lg={8}>
          <Row style={{ marginTop: "150px", marginBottom: "50px" }}>
            <Card bg="light">
              <Col>
                <Form.Select
                  className="w-25 m-3 ms-auto"
                  onChange={submitHandler}
                  ref={selectRef}
                >
                  <option value="default">Sort products by</option>
                  <option value="name-low">by name(A-Z)</option>
                  <option value="name-high">by name(Z-A)</option>
                  <option value="price-low">by price(lowest-highest)</option>
                  <option value="price-high">by price(highest-lowest)</option>
                </Form.Select>
              </Col>
            </Card>
          </Row>
          <Row className="justify-content-center g-4 " lg={3}>
            {products.map((prod) => (
              <Col key={prod.id} className="mb-5">
                <Card>
                  <Link
                    to={`/products/${prod.id}`}
                    className="text-decoration-none"
                  >
                    <Card.Img variant="top" src={prod.image} height="200px" />
                    <Card.Footer>
                      <Container className="d-flex justify-content-between">
                        <span>{prod.name}</span>
                        <span className="text-primary">
                          {<FormatPrice price={prod.price} />}
                        </span>
                      </Container>
                    </Card.Footer>
                  </Link>
                  <Button
                    className="m-2"
                    variant="warning"
                    onClick={() => addHandler(prod)}
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Container className="d-flex  justify-content-center"></Container>
    </React.Fragment>
  );
};

export default Products;
