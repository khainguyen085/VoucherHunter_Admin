import React from "react";

const ProductList = ({ list }) => {
  return (
    <div className="product-container">
      {list.map(({ title, price }) => (
        <div className="product-card">
          <div className="image-container">
            <img src="image/dalat.jpeg" alt="" />
          </div>
          <div className="card-body">
            <p>{title}</p>
            <p>{price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
