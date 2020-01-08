import React from "react"
import PropTypes from "prop-types"

import API from "../api"

class Ingredient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      ingredients: props.ingredients,
      load: true,
      adding: false
    };

    console.log(this.props);
    this.handleAdd = this.handleAdd.bind(this);
    this.groupedIngredients = this.groupedIngredients.bind(this);

    // We need ingredient-group recipe info, load. Not really needed for non-grouped renders, but we
    // don't want to do the checks/work to figure that out, now and in the future.
    this.load();
  }

  load() {
    let ingredients = this.state.ingredients;
    Promise.all(this.groupedIngredients().map(g => API.getRecipe(g.recipe_id))).then((recipes) => {
      this.setState({ recipes, load: false });
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
        acc.push({
          recipe_id: i.recipe_id,
          recipe: this.state.recipes.find(r => r.id == i.recipe_id),
          ingredients: [i]}
        );
      }
      return acc;
    }, []);
    return grouped;
  }

  totalIngredients() {
    // Turn into object for unique ingredients, accumulate quantities for existing ingredients, turn back to array.
    return Object.values(this.state.ingredients.reduce((acc, i) => {
      if (i.ingredient.id in acc) {
        acc[i.ingredient.id].quantity += i.quantity; // TODO: Normalize quantities.
      } else {
        acc[i.ingredient.id] = i;
      }

      return acc;
    }, {}));
  }

  renderGroupedIngredients() {
    return this.groupedIngredients().map(group => {
      return [
        (<li key={`ingredient-group-${group.recipe_id}`} className="ingredient-group">Voor de <b>{group.recipe.name}</b></li>),
        ...group.ingredients.map(this.renderRecipeIngredient)
      ];
    });
  }

  renderTotalIngredients() {
    return this.totalIngredients().map(this.renderRecipeIngredient);
  }

  renderRecipeIngredient(i) {
    return (
      <li key={`ingredient-${i.id}`} className="ingredient">
        <span className="name">{i.ingredient.name}</span>
        <span className="quantity">
          <span className="value">{i.quantity}</span>
          <span className="unit">{i.unit}</span>
        </span>
      </li>
    );
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

    let items = this.props.total ? this.renderTotalIngredients() : this.renderGroupedIngredients();

    return (
      <React.Fragment>
        <div className={this.props.className}>
          <h4 className="title">Ingredients</h4>
          <ul className="ingredients">
            {items}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Ingredient
