import React, {useState} from 'react'

const Sushi = (props) => {
  const [eaten, setEaten] = useState(false)

  const pickSushi = () => {
    if (eaten === false) {
      setEaten(true)
      props.eatSushi(props.sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={pickSushi}>
        { eaten
          ? null
          : <img alt="sushi" src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi