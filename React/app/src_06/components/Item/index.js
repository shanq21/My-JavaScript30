import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './index.css';

export default class Item extends Component {
  render() {
    const { place, input } = this.props;

    // 高亮
    const hl = new RegExp(input, 'gi');
    const city = place.city.replace(hl, '@$&@').split('@');
    const state = place.state.replace(hl, '@$&@').split('@');

    // 三位分节
    const comma = /(?<=\d)(?=(\d{3})+$)/g;
    const population = place.population.replace(comma, ',');

    return (
      <li>
        <span>
          {city.map((str, idx) => 
            <span key={nanoid()} className={idx % 2 === 1 ? "hl" : ""}>{str}</span>
          )}, {state.map((str, idx) => 
            <span key={nanoid()} className={idx % 2 === 1 ? "hl" : ""}>{str}</span>
          )}
        </span>
        <span className="population">{population}</span>
      </li>
    );
  }
}
