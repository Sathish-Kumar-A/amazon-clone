import React from 'react';
import star from "../Assets/Product/star.svg";
import "./product.css";

export const Product = ({ productDetails }) => {
    const rating = productDetails["rating"];
    const starArr = Array(rating).fill(star);
  return (
          <div className="product_container">
            <p className="product_title">{productDetails["title"]}</p>
            <img
                src={productDetails["img"]}
                className="product_img"
            />
          <div className="product_rating">
              {starArr.map((star,index) => {
                  return (
                      <div key={index} >
                          <img
                              src={star}
                              className="star_img"
                              alt="star_img"
                              />
                      </div>
                  )
              })}
          </div>
          <h3 className="product_price">Rs.{productDetails["price"]}</h3>
          <button className="product_cartBtn">Add to cart</button>
          </div>
  )
}
