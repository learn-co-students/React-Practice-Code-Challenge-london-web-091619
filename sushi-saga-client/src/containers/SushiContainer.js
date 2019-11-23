import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {

  const renderSushi = (event) => {
    if (!!props.sushis[1]) {
      return props.sushis.map(sushi => {
        return <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi}/>
      })
    }
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton
          moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer