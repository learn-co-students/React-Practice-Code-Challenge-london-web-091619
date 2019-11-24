import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'

// Endpoint!
const API = 'http://localhost:3000/sushis'

class App extends Component {
  state = {
    sushis: [],
    sushiIndex: 0,
    eaten: [],
    money: 100
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({ sushis }))
  }

  showNextSushis = () => {
    if (this.state.sushiIndex + 4 >= this.state.sushis.length) {
      this.setState({ sushiIndex: 0 })
    } else {
      this.setState({ sushiIndex: this.state.sushiIndex + 4 })
    }
  }

  eatSushi = sushi => {
    this.state.money > sushi.price &&
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: this.state.money - sushi.price
      })
  }

  render() {
    const {sushis, sushiIndex, eaten, money} = this.state

    return (
      <div className="app">
        <SushiContainer
          sushis={
            sushis.slice(
              sushiIndex, sushiIndex + 4
            )}
          showNextSushis={this.showNextSushis}
          eatSushi={this.eatSushi}
          eaten={eaten}
        />
        <Table money={money} eaten={eaten} />
      </div>
    )
  }
}

export default App
