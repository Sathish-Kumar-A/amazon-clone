import React, { useState } from 'react'
import { Card } from './Card';
import "./payment.css";

export const Payment = () => {
    var savedCards = [
        {
            bankName: "Indian Bank",
            cardType: 'debit',
            cardNumber: "76986979798998798",
            cardModel: "Rupay",
            cardModelImage:"https://images-eu.ssl-images-amazon.com/images/G/31/payments-portal/r1/issuer-images/Rupay._CB404661278_.gif",
            nameOnCard: "Sathish kumar Annadurai",
            expiry: "07/28"
        }, {
            bankName: "Indian Bank",
            cardType: 'credit',
            cardNumber: "87698687585758908",
            cardModel: "Visa",
            cardModelImage: "https://images-eu.ssl-images-amazon.com/images/G/31/payments-portal/r1/issuer-images/visa._CB413173451_.png",
            nameOnCard: "Karthik",
            expiry: "09/30"
        }
    ];
    const [cardActive, setCard] = useState(savedCards[0].cardNumber);
    const setCardActive = (index) => {
        setCard(savedCards[index].cardNumber);
    }
  return (
      <div className='mx-5'>
          <h3 className='my-3'>Select a payment method</h3>
          <div className='border rounded col-8 bg-white p-3'>
              <h5>Your saved credit and debit cards</h5>
              <table className='col-12'>
                  <thead>
                      <tr className='table_header'>
                          <td></td>
                          <td></td>
                          <td>Name on card</td>
                          <td>Expires on</td>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          savedCards.map((card, index) => {
                              return (
                                  <Card
                                      active={cardActive === card.cardNumber}
                                      changeActive={(index) => setCardActive(index)}
                                      index={index}
                                      key={index}
                                      bankName={card["bankName"]}
                                      cardType={card["cardType"]}
                                      cardNumber={card["cardNumber"]}
                                      cardModelImage={card["cardModelImage"]}
                                      nameOnCard={card["nameOnCard"]}
                                      expiry={card["expiry"]}
                                  />   
                              )
                         }) 
                      }
                  </tbody>
              </table>
          </div>
    </div>
  )
}

