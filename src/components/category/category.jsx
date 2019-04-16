import React, { Component } from 'react';
import Item from '../item/item';
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
      <div className="category">
        <h1 className="category__title">Hello category page</h1>
        <Link to="/">Go to Home page</Link>
        <ul className="items">{productList}</ul>
      </div>
    );
  }
}
