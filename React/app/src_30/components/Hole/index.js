import React, { Component } from 'react';
import './index.css';

export default class Hole extends Component {
  render() {
    const { holeObj: { isUp }, idx, bonk } = this.props;
    return (
      <div className={"hole" + (isUp ? " up" : "")}>
        <div className="mole" onClick={(e) => bonk(e, idx)}></div>
      </div>
    );
  }
}
