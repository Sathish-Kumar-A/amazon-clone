import React from 'react';
import star from "../Assets/Product/star.svg";
import { useStateValue } from '../context/StateProvider';
import "./product.css";

export const Product = ({ productDetails }) => {
    const rating = productDetails["rating"];
    const starArr = Array(rating).fill(star);
    const [state, dispatch] = useStateValue();
    const { cart } = state;

    const checkItemPresent = () => {
        const item = cart.find(item => item.id === productDetails.id);
        if (item) {
            return true;
        }
        return false;
    }

    const addToCart = () => {
        if (!checkItemPresent()) { 
            dispatch({
                type: "ADD_TO_CART",
                payload: {...productDetails,quantity:1}
            })
        }
        else {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: productDetails.id
            })
        }
    }
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
          <button className="btn btn-warning" onClick={addToCart}>{checkItemPresent()?"Remove from Cart":"Add to cart"}</button>
          </div>
  )
}
