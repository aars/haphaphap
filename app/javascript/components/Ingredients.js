import React from "react"
import PropTypes from "prop-types"

import API from "../api"

class Ingredient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: props.ingredients,
      load: true,
      adding: false
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.groupedIngredients = this.groupedIngredients.bind(this);

    let b = API.getRecipe(1);
    console.log(b);
    // We need ingredient-group recipe info, load.
    this.load();
  }

  load() {
    let ingredients = this.state.ingredients;
    Promise.all(this.groupedIngredients().map(g => API.getRecipe(g.recipe_id))).then(() => {
      this.setState({ load: false });
    });
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

  groupedIngredients() {
    let sorted = this.state.ingredients.sort((a, b) => {
      // current recipe comes first.
      if (this.props.recipe_id && a.recipe_id === this.props.recipe_id) return -1;
      return b.recipe_id - a.recipe_id
    })
    let grouped = sorted.reduce((acc, i) => {
      if (acc[acc.length-1] && acc[acc.length-1].recipe_id == i.recipe_id) {
        // Last entry is same group, push.
        acc[acc.length-1].ingredients.push(i);
      } else {
        // Create new group entry. Get recipe details.
        acc.push({recipe_id: i.recipe_id, ingredients: [i]});
      }
      return acc;
    }, []);
    return grouped;
  }

  render () {
    if (this.state.load) {
      return (
      <React.Fragment>
        <div className={this.props.className}>
          <h4 className="title">Ingredients</h4>
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      </React.Fragment>
      );
    }

    if (this.state.ingredients.length === 0)
      return (<li className="placeholder">No ingredients yet.</li>)

    let addIngredientBtnClasses = [
      "btn", "btn-floating", "halfway-fab", "btn-small",
      "waves-effect", "waves-light", "blue", "right",
      (this.state.adding ? "darken-2" : "lighten-3")
    ];

    let steps = this.groupedIngredients().map(group => {
      return [
        <li key={`ingredient-group-${group.recipe_id}`} className="ingredient-group">group</li>,
        ...group.ingredients.map(i => (
          <li key={`ingredient-${i.id}`} className="ingredient">{i.ingredient.name}</li>
        ))
      ];
    });

    return (
      <React.Fragment>
        <div className={this.props.className}>
          <h4 className="title">Ingredients</h4>
          <ul className="ingredients">
            {steps}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Ingredient
