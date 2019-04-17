import React from 'react';
import './filters.css';
import { filterButtons } from '../helpers';

export const Filters = () => {
  return (
    <section className="filters">
      {filterButtons.map((title, i) => {
        return <button key={i}>{title}</button>;
      })}
    </section>
  );
};
