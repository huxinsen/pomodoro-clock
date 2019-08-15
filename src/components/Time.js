import React from 'react'

function Time (props) {
  const minutes = Math.floor(props.time / 60)
  const seconds = props.time % 60
  return (
    <span className="time">
      {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
    </span>
  )
}

export default Time