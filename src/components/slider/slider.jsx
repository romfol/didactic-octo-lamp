import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import Item from '../item/item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { ArrowLeft, ArrowRight } from '../icons/';
import { ActivePageLoader as SliderLoader } from '../loader/active-page-loader';

export default class SimpleSlider extends PureComponent {
  goSlideForward = () => {
    this.slider.slickNext();
  };

  goSlideBack = () => {
    this.slider.slickPrev();
  };

  render() {
    const { data, slidesToShow, className, slidesUnder1101PxResolution = 3 } = this.props;

    const settings = {
      accessibility: true,
      arrows: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: true,
      slidesToShow,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1101,
          settings: {
            slidesToShow: slidesUnder1101PxResolution,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    if (data.length === 0) {
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
            {[...Array(slidesToShow)].map((i, index) => (
              <div key={index}>
                <div className="slider__loader">
                  <SliderLoader />
                </div>
              </div>
            ))}
          </Slider>
        </section>
      );
    }

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
          {data.map(item => (
            <Item key={item.id} className={`item item${className}`} {...item} />
          ))}
        </Slider>
      </section>
    );
  }
}
