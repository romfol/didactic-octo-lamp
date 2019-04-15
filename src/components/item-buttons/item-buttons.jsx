import React, { Component } from 'react';
import './item-buttons.css';

export default class ItemButtons extends Component {
  state = { activeButton: 'button1' };

  hanleClick = e => {
    this.setState({ activeButton: e.target.id });
    console.log(e.target.id);
  };
  render() {
    const { activeButton } = this.state;

    return (
      <div className="item__buttons" onClick={e => this.hanleClick(e)}>
        <div>
          <button id="button1" />
        </div>
        <div>
          <button id="button2" />
        </div>
        <div>
          <button id="button3" />
        </div>
        <div>
          <button id="button4" />
        </div>
        <div>
          <button id="button5" />
        </div>
        <div className={activeButton === 'button6' ? 'outer-circle' : ''}>
          <button id="button6" />
        </div>
      </div>
    );
  }
}
