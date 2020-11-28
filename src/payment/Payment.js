import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../chekout/CheckoutProduct';
import { useStateValue } from '../globalState/StateProvider';

import './Payment.css';
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/**Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery adress</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React LANE</p>
            <p>Los Angeles</p>
          </div>
        </div>
        {/**Payment section - REVIEW ITEM */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>
        {/**Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
            <div className="payment__detail">
              {/**Stripe payment magig goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
