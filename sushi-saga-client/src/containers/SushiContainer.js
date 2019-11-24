import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = ({sushis, showNextSushis, eatSushi, eaten}) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => (
          <Sushi key={sushi.id} sushi={sushi} eaten={eaten} {...sushi} eatsushi={eatSushi}/>
        ))
          
        }
        <MoreButton showNextSushis = {showNextSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer