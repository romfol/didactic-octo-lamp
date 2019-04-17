import React from 'react';
import './filters.css';
import { filterButtons as buttons } from '../helpers';

export const Filters = () => {
  return (
    <section className="filters">
      {buttons.map((title, i) => {
        return <button key={i}>{title}</button>;
      })}
    </section>
  );
};
