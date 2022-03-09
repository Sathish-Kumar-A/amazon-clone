import React from 'react';
import star from "../Assets/Product/star.svg";
import "./product.css";

export const Product = ({ productDetails }) => {
    // console.log(productDetails);
    const rating = productDetails["rating"];
    const starArr = Array(rating).fill(star);
    // starArr.fill(star,0,rating+1)
    // // starArr.length=rating
    console.log(starArr);
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
                      <div>
                          <img
                              src={star}
                              className="star_img"
                              key={index} />
                      </div>
                  )
              })}
          </div>
          <h3 className="product_price">Rs.{productDetails["price"]}</h3>
          </div>
  )
}
