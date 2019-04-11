import React from 'react';
import './item.css';

const Item = props => {
  const {
    title,
    mediaCollection,
    pricing: {
      price: { amount },
      listPrice: { amount: oldPrice, currency },
    },
  } = props;
  console.log(props);

  return (
    <section>
      <img className="item__image" src={mediaCollection[0].thumbUrl} alt="product" />
      <br />
      <span className="item__name">{title}</span>
      <br />
      <span className="item__old-price">
        {currency}
        {Math.round(oldPrice / 100)}
      </span>
      <span className="item__price">
        {currency}
        {amount / 100}
      </span>
    </section>
  );
};

export default Item;
