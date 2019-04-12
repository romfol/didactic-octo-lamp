import React from 'react';
import './item.css';

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
  // console.log(props);

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
      <div className="item__buttons">
        <button class="button1" />
        <button class="button2" />
        <button class="button3" />
        <button class="button4" />
        <button class="button5" />
        <button class="button5" />
      </div>
    </article>
  );
};

export default Item;
