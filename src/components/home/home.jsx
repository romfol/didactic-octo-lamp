import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../slider/slider';
import axios from 'axios';
import './home.css';

export default class Home extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(`https://qa-api.wovenlyrugs.com/products?page=10&page_size=10&size=runners&group=Rug`)
      .then(response => {
        this.setState({
          data: response.data.result.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <section className="home-page">
        <article className="popular">
          <h2 className="title">Popular</h2>
          <Slider data={data} slidesToShow={6} className="_popular" />
        </article>
        <article className="new">
          <h2 className="title">New</h2>
          <Slider data={data} slidesToShow={3} className="_new" />
        </article>
        <Link to="products">Go to Category</Link>
      </section>
    );
  }
}
