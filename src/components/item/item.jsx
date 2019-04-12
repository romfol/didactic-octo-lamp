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
    className,
  } = props;
  // console.log(props);

  return (
    <article className={className}>
      <div
        className="item__image"
        style={{ backgroundImage: `url(${mediaCollection[0].thumbUrl})` }}
      />
      <span className="item__name">{title}</span>
      <span className="item__old-price">
        {currency}
        {Math.round(oldPrice / 100)}
      </span>
      <span className="item__price">
        {currency}
        {amount / 100}
      </span>
    </article>
  );
};

export default Item;
