import React from 'react'

const Sushi = ({ sushi, name, img_url, price, eatSushi, eaten }) => {
  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => eaten.includes(sushi) || eatSushi(sushi)}
      >
        {eaten.includes(sushi)
         ? null
         : <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fappstickers-cdn.appadvice.com%2F1209633997%2F821107742%2F3eb9bd721c3b611eb29f8c4885dd8ffa-1.png&f=1&nofb=1"
            alt="sushi on a place"
            width="100%"
           />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
