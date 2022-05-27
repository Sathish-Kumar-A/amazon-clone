import React from 'react';
import { SubTotal } from '../SubTotal/SubTotal';
import "./cart.css";;

export const Cart = () => {
  return (
      <div className='cart_container'>
          <div className="left_checkout">
                <h2 className="cart_title">Shopping Cart</h2>
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
