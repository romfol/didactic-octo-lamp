import React, { Component } from 'react';
import Item from '../item/item';
import { Pagination } from '../pagination/pagination';
import { ArrowDown } from '../icons';
import { Loader } from '../loader/loader';
import './category.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Category extends Component {
  state = { data: [], totalItems: <Loader />, activePage: 1 };

  goPageForward = () => {
    this.setState({
      activePage: this.state.activePage + 1,
    });

    axios
      .get(
        `https://qa-api.wovenlyrugs.com/products?page=${this.state.activePage +
          1}&page_size=16&size=runners&group=Rug`
      )
      .then(response => {
        this.setState({
          data: response.data.result.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  goPageBack = () => {
    this.setState({
      activePage: this.state.activePage - 1,
    });

    axios
      .get(
        `https://qa-api.wovenlyrugs.com/products?page=${this.state.activePage -
          1}&page_size=16&size=runners&group=Rug`
      )
      .then(response => {
        this.setState({
          data: response.data.result.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    axios
      .get(
        `https://qa-api.wovenlyrugs.com/products?page=${
          this.state.activePage
        }&page_size=16&size=runners&group=Rug`
      )
      .then(response => {
        this.setState({
          data: response.data.result.data,
          totalItems: response.data.result.total_count,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { data, totalItems } = this.state;

    const productList = data.map(item => (
      <li key={item.id} className="items__row">
        <Item className="item" {...item} />
      </li>
    ));

    return (
      <section className="category">
        <div className="category__data">
          <span className="category__title">{totalItems} Rugs</span>
          <button className="category__sort">
            Sort <ArrowDown />
          </button>
        </div>
        <ul className="items">{productList}</ul>
        <Pagination
          activePage={this.state.activePage}
          totalItems={this.state.totalItems}
          goPageForward={this.goPageForward}
          goPageBack={this.goPageBack}
        />
        <h1 className="category__greet">Hello category page</h1>
        <Link to="/">Go to Home page</Link>
      </section>
    );
  }
}
