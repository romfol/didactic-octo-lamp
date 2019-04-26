import React, { Component } from 'react';
import Slider from 'react-slick';
import Item from '../item/item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { ArrowLeft, ArrowRight } from '../icons/';

export default class SimpleSlider extends Component {
  goSlideForward = () => {
    this.slider.slickNext();
  };

  goSlideBack = () => {
    this.slider.slickPrev();
  };

  render() {
    const { slidesToShow, className } = this.props;

    const settings = {
      accessibility: true,
      arrows: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: true,
      slidesToShow,
      slidesToScroll: 1,
    };

    return (
      <section className="slider">
        <div className="slider__move-buttons">
          <button onClick={this.goSlideBack} className="go-back-button">
            <ArrowLeft />
          </button>
          <button onClick={this.goSlideForward} className="go-forward-button">
            <ArrowRight />
          </button>
        </div>
        <Slider {...settings} ref={slider => (this.slider = slider)}>
          {this.props.data.map(item => (
            <Item key={item.id} className={`item item_${className}`} {...item} />
          ))}
        </Slider>
      </section>
    );
  }
}
