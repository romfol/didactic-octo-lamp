import React from 'react';
import './item.css';

const Item = props => {
  const {
    title,
    description,
    mediaCollection,
    pricing: {
      label,
      listPrice: { amount },
    },
  } = props;
  console.log(props);

  return (
    <section>
      <img className="item__image" src={mediaCollection[0].thumbUrl} alt="product" />
      <br />
      <span className="item__name">Name: {title}</span>
      <br />
      <span className="item__price">Price: {label}</span>
    </section>
  );
};

export default Item;
