import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

state={sushis:[],
lastSushi: 0,
plates: [],
money: 100}

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(json => this.setState({sushis: json}))
  }

  fourSushis = ()=>{
    // debugger
    const filteredAr = (this.state.sushis.map((sushi)=>{
      if(sushi.id<= this.state.lastSushi+4 && sushi.id> this.state.lastSushi){
       
        return (sushi)
      }})).filter((obj)=>obj != undefined)

      
      return filteredAr
  }

  increaseLastSushi = ()=>{
    // debugger
    this.setState({lastSushi: this.state.lastSushi+4})
    
  }
  
  dropSushi = (sid)=>{
    const monsLeft = this.state.money- (this.state.sushis.find(sushi=> sushi.id===sid).price)

    if (monsLeft > 0){
      this.setState({money: this.state.money- (this.state.sushis.find(sushi=> sushi.id===sid).price)})
      this.setState({sushis: (this.state.sushis.filter((sushi)=> sushi.id != sid))})
      this.setState({plates: [...this.state.plates,1]})
    }
  }

  render() {
    
    return (
      <div className="app">
        <SushiContainer fourSushis = {this.fourSushis} plus = {this.increaseLastSushi} dropSushi = {this.dropSushi}/>
        <Table state= {this.state}/>
      </div>
    );
  }
}

export default App;