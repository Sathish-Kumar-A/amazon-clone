import React from 'react';
import "./payment.css";

export const Card = ({ nameOnCard,expiry,active, changeActive, index, bankName,cardType,cardNumber,cardModelImage }) => {
    const cardVariety = cardType === "debit" ? "Debit card" : "Credit card";
  return (
      <tr >
          <td><input name="card" type="radio" onChange={() => changeActive(index)} checked={active} /></td>
          <td className='p-2'>
              <span className='bold_text'>{bankName + " " + cardVariety+" "}</span>
              ending in {cardNumber.slice(cardNumber.length - 4)}
              <img src={cardModelImage} alt="cardType" className='mx-1'/>
          </td>
          <td >{nameOnCard}</td>
          <td>{expiry}</td>
    </tr>
  )
}
