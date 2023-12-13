import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    // console.log('Increase clicked')
    // this.state.count = this.state.count + 1
    // console.log(this.state)

    this.setState(prevState => {
      console.log(`Previous State Count is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      console.log(`Previous State Count is ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{this.state.count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
