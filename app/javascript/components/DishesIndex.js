import React from "react"
import PropTypes from "prop-types"

import Dish from "components/Dish"

class DishesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewDish = this.addNewDish.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateDish = this.updateDish.bind(this);
  }

  getDishes() {
    fetch("/api/v1/dishes.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ dishes: data });
      });
  }

  handleFormSubmit(name) {
    let body = JSON.stringify({
      dish: { name: name }
    });

    fetch("http://localhost:3000/api/v1/dishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(dish => {
        this.addNewDish(dish);
      });
  }

  addNewDish(dish) {
    this.setState({
      dishes: this.state.dishes.concat(dish)
    });
  }

  handleDelete(id) {
    fetch(`http://localhost:3000/api/v1/dishes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log("Dish was deleted!");
      this.deleteDish(id);
    });
  }

  deleteDish(id) {
    newDishes = this.state.dishes.filter(dish => dish.id !== id);
    this.setState({
      dishes: newDishes
    });
  }

  handleUpdate(dish) {
    fetch(`http://localhost:3000/api/v1/dishes/${dish.id}`, {
      method: "PUT",
      body: JSON.stringify({ dish: dish }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.updateDish(dish);
    });
  }

  updateDish(dish) {
    let newDishes = this.state.dishes.filter(f => f.id !== dish.id);
    newDishes.push(dish);
    this.setState({
      dishes: newDishes
    });
  }

  componentDidMount() {
    this.getDishes()
  }
  render() {
    let dishes = this.state.dishes.map(dish => {
      return (
        <div key={dish.id}>
          <Dish
            dish={dish}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
      );
    });

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
