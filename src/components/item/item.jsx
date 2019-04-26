import React from 'react';
import './item.scss';
import ItemButtons from '../item-buttons/item-buttons';

const Item = props => {
  const {
    title,
    mediaCollection,
    pricing: {
      price: { amount },
      listPrice: { amount: oldPrice },
    },
    className,
  } = props;

  return (
    <article className={className}>
      <div
        className="item__image"
        style={{ backgroundImage: `url(${mediaCollection[0].thumbUrl})` }}
      />
      <div className="item__name">{title}</div>
      <div className="item__prices">
        <span className="item__old-price">${Math.round(oldPrice / 100)}</span>
        <span className="item__price">${amount / 100}</span>
      </div>
      <ItemButtons />
    </article>
  );
};

export default Item;
