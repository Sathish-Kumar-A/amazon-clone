import React from 'react';
import { Checkout } from '../checkout/Checkout';
import { SubTotal } from '../SubTotal/SubTotal';
import { useStateValue } from '../context/StateProvider';
import "./cart.css";;

export const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
      <div className='cart_container'>
          <div className="left_checkout">
        <h2 className="cart_title">Shopping Cart</h2>
        <div className='mt-3'>
          {cart.length ? cart.map((item, index) => <Checkout key={index} item={item} />) :
          <p>Your Cart is empty</p>}
        </div>
          </div>
          <div className="right_checkout">
                 {/* <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                  className="left_checkoutImage"
                  alt="cart_banner"
              /> */}
              <SubTotal />
          </div>
    </div>
  )
}
