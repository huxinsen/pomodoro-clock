import React from 'react'

function TimerState (props) {
  const { state } = props
  switch (state) {
    case 'work':
      return (
        <span>Time to work!</span>
      )
    case 'workPaused':
      return (
        <span>Work paused.</span>
      )
    case 'break':
      return (
        <span>Time for a break!</span>
      )
    case 'breakPaused':
      return (
        <span>Break paused.</span>
      )
    default:
      return (
        <span>Something goes wrong.</span>
      )
  }
}

export default TimerState