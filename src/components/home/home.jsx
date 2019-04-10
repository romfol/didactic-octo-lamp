import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>Hello home page</h1>
      <Link to="products">Go to Category</Link>
    </section>
  );
};

export default Home;
