import React from 'react';
import "./payment.css";

export const Card = ({ nameOnCard,expiry,active, changeActive, index, bankName,cardType,cardNumber,cardModelImage }) => {
    const cardVariety = cardType === "debit" ? "Debit card" : "Credit card";
  return (
      <tr className={`${active && "border card_row"}`} onClick={()=>changeActive(index)}>
      <td>
        <input name="card" type="radio" onChange={() => changeActive(index)} checked={active} />
      </td>
      <td className='p-2'>
            <div>
                  <span className='bold_text'>{bankName + " " + cardVariety+" "}</span>
                  ending in {cardNumber.slice(cardNumber.length - 4)}
                  <img src={cardModelImage} alt="cardType" className='mx-1'/>
            </div>
        {
          active && <div className='mx-3'>
            <div className='d-flex align-items-center col-3 my-2'>
              <span className='col-12'>Enter CVV :</span>
              <input type="text" className=' col-8 cvv_input' />
            </div>
              <div className='d-flex align-items-center'>
                <input type="checkbox" />
                < span className='bold_text small mx-2'> Save card as per new RBI guidelines. <a href='#' className='text-decoration none'>Learn more</a></span>
              </div>
          </div>
        }
          </td>
          <td >{nameOnCard}</td>
          <td>{expiry}</td>
    </tr>
  )
}
