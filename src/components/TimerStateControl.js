import React from 'react'
import './TimerStateControl.css'

function TimerStateControl (props) {
  return (
    <div className="state-control">
      <button className="state-btn" onClick={props.onClickStartPause}>{props.timerState === 'work' || props.timerState === 'break' ? 'Pause' : 'Start'}</button>
      <button className="state-btn" onClick={props.onClickReset}>Reset</button>
    </div>
  )
}

export default TimerStateControl