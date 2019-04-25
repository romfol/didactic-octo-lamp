import React, { Component } from 'react';
import Slider from 'react-slick';
import Item from '../item/item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  goSlideForward = () => {
    this.slider.slickNext();
  };

  goSlideBack = () => {
    this.slider.slickPrev();
  };

  render() {
    const settings = {
      accessibility: true,
      arrows: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      slidesToShow: 6,
      slidesToScroll: 1,
    };

    return (
      <section>
        <button onClick={this.goSlideForward}>Go forward</button>
        <button onClick={this.goSlideBack}>Go Back</button>
        <Slider {...settings} ref={slider => (this.slider = slider)}>
          {this.props.data.map(item => (
            <Item key={item.id} className="item" {...item} />
          ))}
        </Slider>
      </section>
    );
  }
}
