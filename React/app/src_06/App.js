import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import List from './components/List';
import './App.css';

export default class App extends Component {
  state = {
    cities: [],
    input: '',
  };

  componentDidMount() {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    axios.get(endpoint).then(
      resp => {
        // console.log('succesful', resp);
        this.setState({
          cities: resp.data,
        });
      },
      err => { console.log('failed', err); }
    );
  }

  getInput = (inputValue) => {
    this.setState({input: inputValue});
  }

  render() {
    const { cities, input } = this.state;

    const reg = new RegExp(input, 'i');
    const matched = cities.filter(place => {
      return place.city.match(reg) || place.state.match(reg);
    });

    return (
      <form className="search-form">
        <Search getInput={this.getInput} />
        <List cities={matched} input={input} />
      </form>
    );
  }
}
