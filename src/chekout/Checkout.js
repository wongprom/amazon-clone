import React from 'react';
import './Checkout.css';
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../globalState/StateProvider';

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log('🚀 ~ file: Checkout.js ~ line 9 ~ Checkout ~ basket', basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout__title"> Yor shopping basket</h2>
          {basket?.map(({ id, image, title, price, rating }) => (
            <CheckoutProduct
              key={id}
              title={title}
              price={price}
              rating={rating}
              image={image}
              id={id}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
