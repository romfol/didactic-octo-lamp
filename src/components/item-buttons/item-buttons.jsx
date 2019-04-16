import React, { Component } from 'react';
import './item-buttons.css';
import colors from '../helpers/colors';

export default class ItemButtons extends Component {
  state = { activeButtonIndex: 0 };

  render() {
    const { activeButtonIndex } = this.state;

    const buttons = colors.map((color, i) => {
      return (
        <div className={activeButtonIndex === i ? 'item__outer-circle' : ''} key={i}>
          <button
            onClick={() => this.setState({ activeButtonIndex: i })}
            style={{ backgroundColor: color }}
          />
        </div>
      );
    });

    return <section className="item__buttons">{buttons}</section>;
  }
}
