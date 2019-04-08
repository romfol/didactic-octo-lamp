import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <section>
      <h1>Hello category page</h1>
      <NavLink to="/">Go to Home page</NavLink>
    </section>
  );
};

export default Category;
