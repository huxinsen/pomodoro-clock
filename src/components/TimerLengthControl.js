import React from 'react'
import Time from './Time'
import './TimerLengthControl.css'

function TimerLengthControl (props) {
  return (
    <div className="length-control">
      <div className="length-label">{props.label}</div>
      <div className="length-buttons">
        <button className="length-btn" onClick={props.onClickDecrease}>&lt;</button>
        <Time time={props.time} />
        <button className="length-btn" onClick={props.onClickIncrease}>&gt;</button>
      </div>
    </div>
  )
}

export default TimerLengthControl