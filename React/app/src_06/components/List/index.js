import React, { Component } from 'react';
import Item from '../Item';
import './index.css';

export default class List extends Component {
  state = {
    suggestions: [
      'Filter for a city',
      'or a state',
    ]
  };

  render() {
    const { cities, input } = this.props;
    return (
      <ul className="suggestions">
        {input === '' ? [
          <li key={'filter'}>Filter for a city</li>,
          <li key={'or'}>or a state</li>
        ]
          : cities.map(place =>
            <Item key={place.latitude} place={place} input={input} />
          )
        }
      </ul>
    );
  }
}
