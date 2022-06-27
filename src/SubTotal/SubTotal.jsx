import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import "./subtotal.css";

export const SubTotal = () => {
  const [{ cart, totalPrice,credentials }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const routeTo = () => {
    if (credentials === null) {
      navigate("/login");
    }
    else {
      navigate("/payment");
    }
  }
  // const totalPrice=cart.reduce((acc,curr)=>acc+curr.price,0);
  const free = true;
  return (
    <div className='subTotal_container d-flex flex-column justify-content-between py-3 px-4'>
      {free && <div>
        <div className='text-success d-flex align-items-center'><BsFillCheckCircleFill /><p className='mb-0 mx-2'> Your order is eligible for free delivery</p></div>
      </div>}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className='mb-0'>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift d-flex align-items-center'>
                <input type="checkbox" /><p className='mb-0 mx-2'>This order contains a gift</p>
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <button className='btn btn-warning' onClick={routeTo}>Proceed to Buy</button>
      </div>
  )
}
