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
      .get(`https://qa-api.wovenlyrugs.com/products?page=1&page_size=20&size=runners&group=Rug`)
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
    return (
      <section className="home">
        <Slider data={this.state.data} />
        <br />
        <Link to="products">Go to Category</Link>
      </section>
    );
  }
}
