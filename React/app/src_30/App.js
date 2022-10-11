import React, { Component } from 'react';
import Hole from './components/Hole';
import './App.css';

export default class App extends Component {
  state = {
    timeUp: false,
    score: 0,

    lastHoleIdx: null,
    holeTimer: null,
    gameTimer: null,

    holes: [{
      isUp: false,
    }, {
      isUp: false,
    }, {
      isUp: false,
    }, {
      isUp: false,
    }, {
      isUp: false,
    }, {
      isUp: false,
    }],
  };


  getRandomTime = (min, max) => {
    min = min || 500;
    max = max || 1000;
    return Math.round(Math.random() * (max - min) + min)
  }


  getRandomHoleIdx = () => {
    const { holes, lastHoleIdx } = this.state;
    const idx = Math.floor(Math.random() * holes.length);
    if (idx === lastHoleIdx) {
      return this.getRandomHoleIdx();
    }
    // 更新lastHole
    this.setState({ lastHoleIdx: idx });
    return idx;
  }


  peep = () => {
    const { holes } = this.state;

    // 新的鼹鼠出洞
    const idx = this.getRandomHoleIdx();
    holes[idx].isUp = true;
    console.log('Peep', idx);

    // 设置该鼹鼠回洞timeout
    const time = this.getRandomTime();
    const holeTimer = setTimeout(() => {
      holes[idx].isUp = false;
      this.setState({ holes: holes });

      // 如果游戏尚未结束，则再次调用peep()
      const { timeUp } = this.state;
      if (!timeUp) {
        this.peep();
      }
    }, time);

    // 更新状态
    this.setState({
      holes: holes,
      holeTimer: holeTimer
    });
  }


  bonk = (e, idx) => {
    if (!e.isTrusted) return;
    console.log('Bonk', idx);
    const { score, holes } = this.state;
    holes[idx].isUp = false;
    this.setState({
      score: score + 1,
      holes: holes,
    });
  }


  startGame = (e, seconds) => {
    // 清除所有timer，初始化holes状态
    const { holeTimer, gameTimer, holes } = this.state;
    holeTimer && clearTimeout(holeTimer);
    gameTimer && clearTimeout(gameTimer);
    const initialHoles = holes.map(() => ({ isUp: false }));

    // 设置新的gameTimer
    // 游戏时间默认为10秒
    seconds = seconds || 10;
    console.log('Game Is On!');
    const newGameTimer = setTimeout(() => {
      this.setState({
        timeUp: true,
        holes: initialHoles,
      });
    }, seconds * 1000);

    // 初始化状态
    this.setState({
      timeUp: false,
      score: 0,

      lastHoleIdx: null,
      holeTimer: null,
      gameTimer: newGameTimer,

      holes: initialHoles,
    })

    // 冒出第一个鼹鼠
    this.peep();
  }


  componentWillUnmount() {
    const { holeTimer, gameTimer } = this.state;
    holeTimer && clearTimeout(holeTimer);
    gameTimer && clearTimeout(gameTimer);
  }


  render() {
    const { timeUp, score, holes } = this.state;
    return (
      <div>
        <h1>
          {timeUp ? "Time Is Up! Your Score: " : "Whack-a-mole! "}
          <span className="score">{score}</span>
        </h1>

        <button onClick={this.startGame}>Start!</button>

        <div className="game">
          {
            holes.map((holeObj, idx) =>
              <Hole key={idx} holeObj={holeObj} idx={idx} bonk={this.bonk} />)
          }
        </div>
      </div>
    );
  }
}
