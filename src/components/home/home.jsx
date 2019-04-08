import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>Hello home page</h1>
      <NavLink to="category">Go to Category</NavLink>
    </section>
  );
};

export default Home;
