import React, { Component } from 'react';
import './item-buttons.css';
import colors from '../helpers/colors';

export default class ItemButtons extends Component {
  state = { activeButton: 0 };

  hanleClick = i => {
    this.setState({ activeButton: i });
  };
  render() {
    const { activeButton } = this.state;

    const buttons = colors.map((color, i) => {
      return (
        <div className={activeButton === i ? 'outer-circle' : ''} key={i}>
          <button onClick={() => this.hanleClick(i)} style={{ backgroundColor: color }} />
        </div>
      );
    });

    return <div className="item__buttons">{buttons}</div>;
  }
}
