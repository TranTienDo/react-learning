import React from "react";
import Product from "./Product";

export default function ProductBox(props) {
  console.log(props);
  const products = props.products;

  var myView = products?.map((product) => (
    <li
      key={product.id}
      className="span3"
      style={{ height: "350px", margin: "5px" }}
    >
      <Product product={product} />
    </li>
  ));
  return (
    <div className="well well-small">
      <h3>Our Products </h3>
      <div className="row-fluid">
        <ul className="thumbnails">{myView}</ul>
      </div>
    </div>
  );
}
