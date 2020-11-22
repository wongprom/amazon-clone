import React from 'react';
import { useStateValue } from '../globalState/StateProvider';

import StarsIcon from '@material-ui/icons/Stars';
import './Product.css';

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log('Product -> basket', basket);

  const addToBasket = () => {
    // dispathc the item to datalayer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarsIcon color="secondary" />
            ))}
        </div>
      </div>
      <img src={image} alt="book" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
