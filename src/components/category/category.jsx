import React, { Component } from 'react';
import Item from '../item/item';
import { Pagination } from '../pagination/pagination';
import { ArrowDown } from '../icons';
import { CategoryTitleLoader } from '../loader/category-title-loader';
import './category.scss';
import axios from 'axios';

export default class Category extends Component {
  state = {
    data: [],
    totalItems: <CategoryTitleLoader />,
    activePage: 1,
    itemsPerPage: 12,
    loaded: true,
  };

  goPageForward = () => {
    const { itemsPerPage } = this.state;

    this.setState(
      state => ({ activePage: state.activePage + 1, loaded: false }),
      () =>
        axios
          .get(
            `https://qa-api.wovenlyrugs.com/products?page=${
              this.state.activePage
            }&page_size=${itemsPerPage}&size=runners&group=Rug`
          )
          .then(response => {
            this.setState({
              data: response.data.result.data,
              loaded: true,
            });
          })
          .catch(function(error) {
            console.log(error);
          })
    );
  };

  goPageBack = () => {
    const { itemsPerPage } = this.state;

    this.setState(
      state => ({ activePage: state.activePage - 1, loaded: false }),
      () =>
        axios
          .get(
            `https://qa-api.wovenlyrugs.com/products?page=${
              this.state.activePage
            }&page_size=${itemsPerPage}&size=runners&group=Rug`
          )
          .then(response => {
            this.setState({
              data: response.data.result.data,
              loaded: true,
            });
          })
          .catch(function(error) {
            console.log(error);
          })
    );
  };

  componentDidMount() {
    axios
      .get(
        `https://qa-api.wovenlyrugs.com/products?page=${this.state.activePage}&page_size=${
          this.state.itemsPerPage
        }&size=runners&group=Rug`
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
          itemsPerPage={this.state.itemsPerPage}
          loaded={this.state.loaded}
        />
      </section>
    );
  }
}
