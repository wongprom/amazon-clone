import React from 'react';
import FlipMove from 'react-flip-move';
import './Checkout.css';
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../globalState/StateProvider';

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h3>Hello, {user ? user.email : 'Guest'}</h3>
          <h2 className="checkout__title"> Yor shopping basket</h2>
          <FlipMove
            leaveAnimation="fade"
            duration="700"
            maintainContainerHeight
          >
            {basket?.map(({ id, title, price, rating, image }) => (
              <CheckoutProduct
                key={id}
                title={title}
                price={price}
                rating={rating}
                image={image}
                id={id}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
