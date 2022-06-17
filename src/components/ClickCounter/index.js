import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1 className="heading">
          The Button has been clicked
          <br /> <span className="counter-value">{count}</span> times
        </h1>
        <p className="description"> Click the button to increase the count!</p>
        <div className="alignment">
          <button className="button" type="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
