import React, { Component } from 'react';
import Slider from 'react-slick';
import Item from '../item/item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    console.log(this.props);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
    };

    return (
      <section>
        <Slider {...settings}>
          {this.props.data.map(item => (
            <Item className="item" {...item} />
          ))}
        </Slider>
      </section>
    );
  }
}
