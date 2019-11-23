import React, {useState, useEffect} from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const BASE_URL = 'http://localhost:3000'
const SUSHI_URL = `${BASE_URL}/sushis`

const App = () => {
  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(100)
  const [index, setIndex] = useState(0)
  const [eatenSushi, setEatenSushi] = useState([])

  useEffect(() => {
    fetchSushi();
  }, [])

  const getSushis = () => {
    return sushis.slice(index, index + 4)
  }

  const moreSushi = (event) => {
    event.preventDefault()
    setIndex(index + 4)
  }

  const fetchSushi = async() => {
    return fetch(SUSHI_URL)
      .then(resp => resp.json())
      .then(sushiData => setSushis(sushiData))
  }
  
  const eatSushi = (sushi) => {
    if (sufficientFunds(sushi)) {
      setEatenSushi([...eatenSushi, sushi])
      setMoney(money - sushi.price)
    } else {
      window.alert("YOU BROKE MOFO")
    }
  }

  const sufficientFunds = (sushi) => {
    if (sushi.price <= money) {
      return true
    }
    return false
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={getSushis()}
        eatSushi={eatSushi}
        moreSushi={moreSushi}/>
      <Table
        money={money}
        setMoney={setMoney}
        eatenSushi={eatenSushi}/>
    </div>
  )

}

export default App;