import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 500,
    },
    {
      id: 2,
      name: "Phones",
      price: 300,
    },
    {
      id: 3,
      name: "Modem",
      price: 100,
    },
  ];

  const fruits = ["Apple", "Mango", "Banana"];
  const fruitsList = fruits.map((fruit, index) => <h3 key={index}>{fruit}</h3>);
  return (
    <div>
      {products.map((product) => (
        <h3 key={product.id}>
          {product.name}: {product.price}
        </h3>
      ))}
      <br />
      {fruitsList}
    </div>
  );
};

export default Product;
