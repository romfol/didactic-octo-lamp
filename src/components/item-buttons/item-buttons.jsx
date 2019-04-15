import React, { Component } from 'react';
import './item-buttons.css';

export default class ItemButtons extends Component {
  hanleClick = e => {
    console.log(e.target.id);
  };
  render() {
    return (
      <div className="item__buttons">
        <div className="outer-circle">
          <button className="button1" />
        </div>
        <div>
          <button className="button2" />
        </div>
        <div>
          <button className="button3" />
        </div>
        <div>
          <button onClick={e => this.hanleClick(e)} id="button4" />
        </div>
        <div>
          <button className="button5" />
        </div>
        <div>
          <button className="button6" />
        </div>
      </div>
    );
  }
}
