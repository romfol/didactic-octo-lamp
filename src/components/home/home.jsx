import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../slider/slider';
import './home.css';

const Home = () => {
  return (
    <section className="home">
      <Slider />
      <Link to="products">Go to Category</Link>
    </section>
  );
};

export default Home;
