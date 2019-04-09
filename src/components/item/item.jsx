import React from 'react';

const Item = props => {
  const { name, description, mediaCollection } = props;
  console.log(props.mediaCollection);

  return (
    <section>
      <span>{name}</span>
      <br />
      <img src={mediaCollection[0].thumbUrl} alt="product" />
      <br /> <span>{description}</span>
    </section>
  );
};

export default Item;
