import {Component} from 'react'
import './index.css'

const initialTimer = {inMinutes: 0, inSeconds: 0}

class Stopwatch extends Component {
  state = initialTimer

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timerID)

  onStartBtn = () => {
    console.log('timerStarted')
    this.timerID = setInterval(this.startTimer, 1000)
  }

  startTimer = () => {
    this.setState(prevState => ({
      inMinutes: prevState.inMinutes + 1,
      inSeconds: prevState.inSeconds + 1,
    }))
  }

  onStopBtn = () => {
    console.log('timerStoped')
    this.clearTimerInterval()
  }

  onResetBtn = () => {
    console.log('timerReset')
    this.clearTimerInterval()
    this.setState(initialTimer)
  }

  getTimer = () => {
    const {inMinutes, inSeconds} = this.state
    const minutes = Math.floor(inMinutes / 60)
    const seconds = Math.floor(inSeconds % 60)
    const stringfyMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringfySeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringfyMinutes}:${stringfySeconds}`
  }

  render() {
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-card">
              <img
                className="stopwatch-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="timer">{this.getTimer()}</h1>
            <div className="start-stop-reset-card">
              <button
                onClick={this.onStartBtn}
                type="button"
                className={`button ${'start'}`}
              >
                Start
              </button>
              <button
                onClick={this.onStopBtn}
                type="button"
                className={`button ${'stop'}`}
              >
                Stop
              </button>
              <button
                onClick={this.onResetBtn}
                type="button"
                className={`button ${'reset'}`}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
