import React, { Fragment, useEffect, useState } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends React.Component {
  state = {
    sushiIndexesToDisplay: [0, 1, 2, 3]
  };

  moreSushi = () => {
    this.setState({
      sushiIndexesToDisplay: this.state.sushiIndexesToDisplay.map(
        sushiIndex => {
          return sushiIndex >
            this.props.sushis.length -
              this.state.sushiIndexesToDisplay.length -
              1
            ? sushiIndex -
                this.props.sushis.length +
                this.state.sushiIndexesToDisplay.length
            : sushiIndex + this.state.sushiIndexesToDisplay.length;
        }
      )
    });
  };

  render() {
    const { sushis, eatSushi } = this.props;
    const { sushiIndexesToDisplay } = this.state;
    const sushisToDisplay = sushis.filter((sushi, index) => {
      if (sushiIndexesToDisplay.includes(index)) return sushi;
    });
    return (
      <Fragment>
        <div className="belt">
          {sushisToDisplay.map(sushi => (
            <Sushi {...sushi} eatSushi={eatSushi} />
          ))}
          <MoreButton moreSushi={this.moreSushi} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
