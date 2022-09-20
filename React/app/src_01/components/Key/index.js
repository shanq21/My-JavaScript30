import React, { Component } from 'react';
import './index.css';

export default class Key extends Component {
  audio = null;

  componentDidMount() {
    const { keyData: { name } } = this.props;
    const audioUrl = require(`../../sounds/${name}.wav`);
    this.audio = new Audio(audioUrl);
  }

  removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    const { keyData: { code }, togglePlaying } = this.props;
    togglePlaying(code, false);
  }

  playSound = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  }

  render() {
    const { keyData: { kbd, name, isPlaying } } = this.props;
    if (isPlaying) {
      this.playSound();
    }
    return (
      <div
        onTransitionEnd={this.removeTransition}
        className={'key ' + (isPlaying ? 'playing' : '')}
      >
        <kbd>{kbd}</kbd>
        <span className="sound">{name}</span>
      </div>
    );
  }
}