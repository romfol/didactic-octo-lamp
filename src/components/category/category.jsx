import React, { Component } from 'react';
import Item from '../item/item';
import { ArrowDown } from '../icons';
import './category.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Category extends Component {
  state = { data: [] };

  componentDidMount() {
    axios
      .get('https://qa-api.wovenlyrugs.com/products?page=1&page_size=12&size=runners&group=Rug')
      .then(response => {
        this.setState({ data: response.data.result.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;

    const productList = data.map(item => (
      <li key={item.id} className="items__row">
        <Item className="item" {...item} />
      </li>
    ));

    return (
      <section className="category">
        <div className="category__data">
          <span className="category__title">769 Rugs</span>
          <button className="category__sort">
            Sort <ArrowDown />
          </button>
        </div>
        <ul className="items">{productList}</ul>
        <h1 className="category__greet">Hello category page</h1>
        <Link to="/">Go to Home page</Link>
      </section>
    );
  }
}
