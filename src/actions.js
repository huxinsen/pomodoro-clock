function tick (prevState) {
  const { workTime, breakTime, timeLeft, timerState } = prevState
  if (timerState === 'workPaused' || timerState === 'breakPaused') {
    return {}
  }
  if (timerState === 'work' && timeLeft === 0) {
    return {
      timerState: 'break',
      timeLeft: breakTime,
      timeGoneRatio: 0,
    }
  }
  if (timerState === 'break' && timeLeft === 0) {
    return {
      timerState: 'work',
      timeLeft: workTime,
      timeGoneRatio: 0,
    }
  }
  let timeGoneRatio
  if (timerState === 'work') {
    timeGoneRatio = (workTime - (timeLeft - 1)) / workTime
  } else {
    timeGoneRatio = (breakTime - (timeLeft - 1)) / breakTime
  }
  return {
    timeLeft: timeLeft - 1,
    timeGoneRatio,
  }
}

function decreaseWorkTime (prevState) {
  const { workTime, timerState } = prevState
  if (workTime <= 60) {
    return {}
  }
  if (timerState === 'work' || timerState === 'workPaused') {
    return {
      workTime: workTime - 60,
      timeLeft: workTime - 60,
    }
  } else {
    return {
      workTime: workTime - 60,
    }
  }
}

function increaseWorkTime (prevState) {
  const { workTime, timerState } = prevState
  if (workTime >= 3600) {
    return {}
  }
  if (timerState === 'work' || timerState === 'workPaused') {
    return {
      workTime: workTime + 60,
      timeLeft: workTime + 60,
    }
  } else {
    return {
      workTime: workTime + 60,
    }
  }
}

function decreaseBreakTime (prevState) {
  const { breakTime, timerState } = prevState
  if (breakTime <= 60) {
    return {}
  }
  if (timerState === 'break' || timerState === 'breakPaused') {
    return {
      breakTime: breakTime - 60,
      timeLeft: breakTime - 60,
    }
  } else {
    return {
      breakTime: breakTime - 60,
    }
  }
}

function increaseBreakTime (prevState) {
  const { breakTime, timerState } = prevState
  if (breakTime >= 3600) {
    return {}
  }
  if (timerState === 'break' || timerState === 'breakPaused') {
    return {
      breakTime: breakTime + 60,
      timeLeft: breakTime + 60,
    }
  } else {
    return {
      breakTime: breakTime + 60,
    }
  }
}

function startPause (prevState) {
  const { timerState } = prevState
  switch (timerState) {
    case 'work':
      return {
        timerState: 'workPaused'
      }
    case 'workPaused':
      return {
        timerState: 'work'
      }
    case 'break':
      return {
        timerState: 'breakPaused'
      }
    case 'breakPaused':
      return {
        timerState: 'break'
      }
    default:
      return {}
  }
}

function reset () {
  return {
    workTime: 25 * 60,
    breakTime: 5 * 60,
    timeLeft: 25 * 60,
    timerState: 'workPaused',
    timeGoneRatio: 0
  }
}

export { tick, decreaseWorkTime, increaseWorkTime, decreaseBreakTime, increaseBreakTime, startPause, reset }