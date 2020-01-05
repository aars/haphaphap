import React from "react"
import PropTypes from "prop-types"

import API from "../api"

class Ingredient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: props.ingredients,
      adding: false
    };
  }

  handleAdd() {
    if (this.state.adding) {
      if (this.newIngredient && this.newIngredient.value) {
        let ingredient = {
          name: this.newIngredient.value
        };
        if (this.props.recipe_id) ingredient.recipes = [{ id: this.props.recipe_id }];

        API.createIngredient(ingredient).then(ingredient => {
          let ingredients = this.state.ingredients;
          this.state.ingredients.push(ingredient);
          this.setState({ ingredients: ingredients });
        });

      }
    }
    this.setState({ adding: !this.state.adding });
  }

  render () {
    let addIngredientBtnClasses = [
      "btn", "btn-floating", "halfway-fab", "btn-small",
      "waves-effect", "waves-light", "blue", "right",
      (this.state.adding ? "darken-2" : "lighten-3")
    ];

    return (
      <React.Fragment>
        <div className={this.props.className}>
          <h4 className="title">Ingredients</h4>
          <ul className="ingredients">
            {this.state.ingredients.length && this.state.ingredients.map(ingredient => (
              <li className="ingredient" key={ingredient.id}>{ingredient.name}</li>)
            ) || (
              <li className="placeholder">No ingredients yet.</li>
            )}

            {this.props.add && (
              <li className="add">
                <a className={addIngredientBtnClasses.join(' ')} onClick={this.handleAdd.bind(this)}>
                  <i className="material-icons">add</i>
                </a>
              </li>
            )}
            {this.state.adding && (
              <li className="add-input input-field">
                <form onSubmit={this.handleAdd.bind(this)}>
                  <input
                    type="text"
                    ref={input => (this.newIngredient = input)}
                    placeholder="Ingredient name"
                    autoFocus
                  />
                </form>
              </li>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Ingredient
