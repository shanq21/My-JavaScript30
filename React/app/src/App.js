import React, { Component } from 'react';
import Key from './components/Key';
import './App.css'

export default class App extends Component {
  state = {
    keys: [
      {
        code: 'KeyA',
        kbd: 'A',
        name: 'clap',
        isPlaying: false,
      }, {
        code: 'KeyS',
        kbd: 'S',
        name: 'hihat',
        isPlaying: false,
      }, {
        code: 'KeyD',
        kbd: 'D',
        name: 'kick',
        isPlaying: false,
      }, {
        code: 'KeyF',
        kbd: 'F',
        name: 'openhat',
        isPlaying: false,
      }, {
        code: 'KeyG',
        kbd: 'G',
        name: 'boom',
        isPlaying: false,
      }, {
        code: 'KeyH',
        kbd: 'H',
        name: 'ride',
        isPlaying: false,
      }, {
        code: 'KeyJ',
        kbd: 'J',
        name: 'snare',
        isPlaying: false,
      }, {
        code: 'KeyK',
        kbd: 'K',
        name: 'tom',
        isPlaying: false,
      }, {
        code: 'KeyL',
        kbd: 'L',
        name: 'tink',
        isPlaying: false,
      }
    ]
  };

  onKeyPressed = (e) => {
    this.togglePlaying(e.code, true);
  }

  togglePlaying = (code, isPlaying) => {
    const { keys } = this.state;
    const newKeys = keys.map((key) => {
      if (key.code === code) {
        key.isPlaying = isPlaying;
      }
      return key;
    });
    this.setState({ keys: newKeys });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyPressed);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyPressed);
  }

  render() {
    const { keys } = this.state;
    return (
      <div className="keys">
        {
          keys.map((keyData) =>
            <Key key={keyData.name} keyData={keyData}
              togglePlaying={this.togglePlaying} />
          )
        }
      </div>
    );
  }
}
