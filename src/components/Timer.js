import React from 'react'
import Time from './Time'
import TimerCircleProgress from './TimerCircleProgress'
import TimerState from './TimerState'
import './Timer.css'

function Timer (props) {
  return (
    <div className="timer">
      <div className="time-left">
        <Time time={props.time} />
        <div className="time-left__progress">
          <TimerCircleProgress
            size={200}
            strokeSize={4}
            timeGoneRatio={props.timeGoneRatio} />
        </div>
      </div>
      <div className="timer-state">
        <TimerState state={props.timerState} />
      </div>
    </div>
  )
}

export default Timer