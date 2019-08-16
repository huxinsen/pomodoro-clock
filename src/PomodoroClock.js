import React from 'react'
import './PomodoroClock.css'
import TimerLengthControl from './components/TimerLengthControl'
import Timer from './components/Timer'
import TimerStateControl from './components/TimerStateControl'
import {
  tick,
  decreaseWorkTime,
  increaseWorkTime,
  decreaseBreakTime,
  increaseBreakTime,
  startPause,
  reset
} from './actions'

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workTime: 25 * 60,
      breakTime: 5 * 60,
      timeLeft: 25 * 60,
      timerState: 'workPaused',
      timeGoneRatio: 0
    }
    this.handleClickDecreaseWorkTime = this.handleClickDecreaseWorkTime.bind(this)
    this.handleClickIncreaseWorkTime = this.handleClickIncreaseWorkTime.bind(this)
    this.handleClickDecreaseBreakTime = this.handleClickDecreaseBreakTime.bind(this)
    this.handleClickIncreaseBreakTime = this.handleClickIncreaseBreakTime.bind(this)
    this.handleClickStartPause = this.handleClickStartPause.bind(this)
    this.handleClickReset = this.handleClickReset.bind(this)

    setInterval(() => {
      this.setState(tick)
      if (this.state.timeLeft === 0) {
        this.audioBeep.play()
      }
    }, 1000)
  }
  handleClickDecreaseWorkTime () {
    this.setState(decreaseWorkTime)
  }
  handleClickIncreaseWorkTime () {
    this.setState(increaseWorkTime)
  }
  handleClickDecreaseBreakTime () {
    this.setState(decreaseBreakTime)
  }
  handleClickIncreaseBreakTime () {
    this.setState(increaseBreakTime)
  }
  handleClickStartPause () {
    this.setState(startPause)
  }
  handleClickReset () {
    this.audioBeep.pause()
    this.audioBeep.currentTime = 0
    this.setState(reset)
  }
  render () {
    const { workTime, breakTime, timeLeft, timerState, timeGoneRatio } = this.state
    return (
      <div className="clock">
        <h1 className="title">Pomodoro Clock</h1>
        <div className="length-controls">
          <TimerLengthControl
            label="Session length"
            time={workTime}
            onClickDecrease={this.handleClickDecreaseWorkTime}
            onClickIncrease={this.handleClickIncreaseWorkTime} />
          <TimerLengthControl
            label="Break length"
            time={breakTime}
            onClickDecrease={this.handleClickDecreaseBreakTime}
            onClickIncrease={this.handleClickIncreaseBreakTime} />
        </div>
        <Timer
          time={timeLeft}
          timerState={timerState}
          timeGoneRatio={timeGoneRatio} />
        <TimerStateControl
          timerState={timerState}
          onClickStartPause={this.handleClickStartPause}
          onClickReset={this.handleClickReset} />
        <audio preload="auto"
          src={require('./BeepSound.wav')}
          ref={(audio) => { this.audioBeep = audio }} />
      </div>
    )
  }
}

export default PomodoroClock