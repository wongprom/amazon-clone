import React from 'react';
import moment from 'moment';
import './Order.css';
import CheckoutProduct from '../chekout/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h.mma')}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          id={item.id}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3>Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
};

export default Order;
