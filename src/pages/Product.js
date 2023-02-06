import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const params = useParams();

  const getProducts = async (url) => {
    // setLoading(true);
    const response = await axios.get(url);
    // setLoading(false);
    const data = await response.data;
    console.log(data);
  };

  useEffect(() => {
    getProducts(`https://api.pujakaitem.com/api/products/${params.productId}`);
  }, []);

  return (
    <React.Fragment>
      <h1 style={{ marginTop: "110px" }} className="text-center">
        {params.productId}
      </h1>
    </React.Fragment>
  );
};

export default Product;
