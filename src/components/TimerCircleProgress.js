import React from 'react'
import './TimerCircleProgress.css'

function TimerCircleProgress (props) {
  const size = props.size
  const centerPos = props.size / 2
  const strokeSize = props.strokeSize
  const radius = size / 2 - strokeSize / 2
  const circumference = 2 * Math.PI * radius
  return (
    <div className="progress">
      {/* static circle SVG */}
      <svg className="progress__static-circle" width={size} height={size}>
        <circle
          cx={centerPos}
          cy={centerPos}
          r={radius}
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
      </svg>
      {/* stateful circle SVG based on timeGoneRatio */}
      <svg className="progress__stateful-circle" width={size} height={size}>
        <circle
          cx={centerPos}
          cy={centerPos}
          r={radius}
          fill="none"
          stroke="#fff"
          strokeWidth={strokeSize}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - props.timeGoneRatio)}
        />
      </svg>
    </div>
  )
}

export default TimerCircleProgress