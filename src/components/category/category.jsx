import React, { Component } from 'react';
import Item from '../item/item';
import { NavLink } from 'react-router-dom';
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
    const productList = this.state.data.map(item => (
      <li key={item.id}>
        <Item {...item} />
      </li>
    ));

    return (
      <section>
        <h1>Hello category page</h1>
        <NavLink to="/">Go to Home page</NavLink>
        <ul>{productList}</ul>
      </section>
    );
  }
}
