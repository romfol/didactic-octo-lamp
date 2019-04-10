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
      <img src={mediaCollection[0].thumbUrl} alt="product" />
      <br />
      <span>Name: {title}</span>
      <br />
      <span>Price: {label}</span>
    </section>
  );
};

export default Item;
