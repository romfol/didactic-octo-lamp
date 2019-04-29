import React from 'react';
import './filters.css';
import { filterButtons as buttons } from '../../helpers';

export const Filters = () => {
  return (
    <section className="filters">
      {buttons.map((title, i) => (
        <button key={i}>{title}</button>
      ))}
    </section>
  );
};
