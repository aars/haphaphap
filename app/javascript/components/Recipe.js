import React from "react"
import PropTypes from "prop-types"

import API from "../api";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: props.recipe,
      load: !!props.load
    };

    if (props.load) this.getRecipe(props.recipe.id)
  }

  getRecipe(id) {
    API.getRecipe(id).then(recipe => this.setState({ recipe: recipe, load: false }));
  }

  render () {
    if (this.state.load) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    console.log(this.state.recipe);

    let steps = this.state.recipe.recipe_steps.map(step => {
      if (step.is_recipe_id) {
        let recipe = {id: step.is_recipe_id};
        return (
          <li key={step.id} className="row recipe_step is-recipe collection-item avatar">
            <Recipe recipe={{id: step.is_recipe_id}} as_step={true} load={true} />
          </li>
        )
      } else {
        return (
          <li key={step.id} className="row recipe_step collection-item avatar">
            <span className="step-duration right">
              <i className="material-icons">access_time</i>
              <span>{step.duration}min</span>
            </span>
            <span className="title">{step.title}</span>
            <p>{step.instruction}</p>
          </li>
        )
      }
    });

    return (
      <React.Fragment>
        <div className={"row recipe " + (this.props.as_step && "as-step")}>
          {this.props.as_step && (
            <div className="title">{this.state.recipe.name}</div>
          ) || (
            <h5 className="name">{this.state.recipe.name}</h5>
          )}

          {!this.props.as_step && (
            <p className="description">{this.state.recipe.description}</p>
          )}

          {!this.props.as_step && <h4>Steps</h4>}
          <ol className="collection">
            {steps}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

Recipe.propTypes = {
  name: PropTypes.string
};
export default Recipe
