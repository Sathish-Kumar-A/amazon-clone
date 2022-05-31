import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import "./checkout.css";
import { useStateValue } from '../context/StateProvider';

export const Checkout = ({ item }) => {
    const [{ cart,totalPrice }, dispatch] = useStateValue();
    const { id, price, title, img, rating, inStock } = item;
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => { 
        setQuantity(e.target.value);
        dispatch({type: "UPDATE_QUANTITY", payload: {id, quantity: e.target.value}});
    }
    
    const removeFromCart = () => { 
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        });
    }
  return (
      <div className='d-flex mb-3 border px-3 py-4'>
          <img src={img} alt="checkout_productImg" className='col-4'/>
          <div className='col-8 mx-2'>
              <p className='mb-0 mb-1'>{title}</p>
              <CurrencyFormat
                  renderText={(value) => {
                      return (
                          <h5 className='mb-0 mb-1'>{value}</h5>
                      )
                  }}
                  decimalScale={2}
                  value={price}
                  displayType={'text'}
                  thousandSeparator={true}
                    prefix={'₹'}
              />
              <small className={`${inStock ? "text-success" : "text-warning"} small_text`}>{inStock ? "In stock" : "Out of stock"}</small>
              <small className='d-block small_text'>{price > 500 && "Eligible for FREE Shipping"}</small>
              <div className='d-flex align-items-center mt-1'>
                <select className='select_box' onChange={handleChange}>
                    {Array(10).fill(1).map((_, index) => {
                            return (
                                <option key={index} value={index + 1}>{index + 1}</option>
                            )
                    })}
                </select>
                <button className='btn btn-danger mx-2 remove_button' onClick={removeFromCart}>Remove</button>
              </div>
          </div>
    </div>
  )
}

