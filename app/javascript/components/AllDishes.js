import React from "react"
import Dish from "components/Dish"

class AllDishes extends React.Component {
  render() {
    let dishes = this.props.dishes.map(dish => {
      return (
        <div key={dish.id}>
          <Dish
            dish={dish}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
          />
        </div>
      );
    });

    return (
      <div className="row">
        {dishes}
      </div>
    );
  }
}

export default AllDishes
