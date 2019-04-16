import React, { Component } from 'react';
import './item-buttons.css';
import colors from '../helpers/colors';

export default class ItemButtons extends Component {
  state = { activeButton: 0 };

  hanleClick = e => {
    const { id } = e.target;
    id && this.setState({ activeButton: +id });
  };
  render() {
    const { activeButton } = this.state;

    const buttons = colors.map((color, i) => {
      return (
        <div className={activeButton === i ? 'outer-circle' : ''} key={i}>
          <button style={{ backgroundColor: color }} id={i} />
        </div>
      );
    });

    return (
      <div className="item__buttons" onClick={e => this.hanleClick(e)}>
        {buttons}
      </div>
    );
  }
}
