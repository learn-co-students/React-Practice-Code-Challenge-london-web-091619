import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
    
        { props.fourSushis().map((sushi)=>{
          return <Sushi sushi = {sushi} id= {sushi.id} dropSushi= {props.dropSushi}/>
         })}
      
        <MoreButton plus = {props.plus}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer