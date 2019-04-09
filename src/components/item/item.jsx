import React from 'react';

const Item = props => {
  const {
    name,
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
      <span>Name: {name}</span>
      <br />
      <span>Price: {label}</span>
      <br />
      <span>Amount: {amount}</span>
      <br />
      <img src={mediaCollection[0].thumbUrl} alt="product" />
      <br /> <span>{description}</span>
    </section>
  );
};

export default Item;
