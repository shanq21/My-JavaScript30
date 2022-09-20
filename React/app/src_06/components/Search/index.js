import React, { Component } from 'react';
import './index.css';

export default class Search extends Component {
  onChange = () => {
    const { getInput } = this.props;
    const inputValue = this.input.value;
    getInput(inputValue);
  }

  render() {
    return (
      <input ref={(obj) => { this.input = obj }}
        type="text" className="search" placeholder="City or State"
        onChange={this.onChange}
      />
    );
  }
}
