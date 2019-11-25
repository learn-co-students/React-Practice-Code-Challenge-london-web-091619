import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    balance: Math.floor(Math.random() * 50) + 15,
    formValue: 0
  };

  fetchSushi = () => {
    return fetch(API).then(resp => resp.json());
  };

  componentDidMount() {
    this.fetchSushi().then(sushis => {
      this.setState({ sushis });
    });
  }

  eatSushi = (id, price, isEaten) => {
    if (this.state.balance < price || isEaten) return;
    this.setState({ eatenSushis: [...this.state.eatenSushis, id] });
    this.setState({ balance: this.state.balance - price });
  };

  render() {
    const { sushis, eatenSushis, balance } = this.state;
    const sushisToDisplay = sushis.map(sushi => {
      eatenSushis.includes(sushi.id)
        ? (sushi.isEaten = true)
        : (sushi.isEaten = false);
      return sushi;
    });
    return (
      <div className="app">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.setState({
              balance:
                parseInt(this.state.balance) + parseInt(this.state.formValue)
            });
            this.setState({ formValue: 0 });
          }}
        >
          <input
            type="number"
            value={this.state.formValue}
            onChange={e => this.setState({ formValue: e.target.value })}
          ></input>
        </form>
        <SushiContainer sushis={sushisToDisplay} eatSushi={this.eatSushi} />
        <Table eatenSushis={eatenSushis} balance={balance} />
      </div>
    );
  }
}

export default App;
