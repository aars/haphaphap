import React from "react"
import PropTypes from "prop-types"

import API from "../api"
import DishCard from "components/DishCard"


class DishesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: this.props.dishes
    };
  }

  getDishes() {
    API.getDishes().then(data => {
      this.setState({ dishes: data });
    });
  }

  addDish(dish) {
    this.setState({
      dishes: this.state.dishes.concat(dish)
    });
  }

  render() {
    let dishes = this.state.dishes.map(dish => (
      <div key={dish.id}>
        <DishCard dish={dish} />
      </div>
    ));

    return (
      <React.Fragment>
        <div className="row">
          {dishes}
        </div>
      </React.Fragment>
    );
  }
}

export default DishesIndex
