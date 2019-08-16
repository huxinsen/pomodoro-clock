import React from 'react'
import './TimerLengthControl.css'

function TimerLengthControl (props) {
  return (
    <div className="length-control">
      <div className="length-label">{props.label}</div>
      <div className="length-buttons">
        <button className="length-btn" onClick={props.onClickDecrease}>&lt;</button>
        <span>{Math.floor(props.time / 60)}</span>
        <button className="length-btn" onClick={props.onClickIncrease}>&gt;</button>
      </div>
    </div>
  )
}

export default TimerLengthControl