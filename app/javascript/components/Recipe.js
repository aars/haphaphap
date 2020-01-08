import React from "react"
import PropTypes from "prop-types"

import API from "../api";
import Ingredients from "components/Ingredients";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: props.recipe,
      load: false
    };

    if (this.props.recipe_id) {
      this.state.load = true;
      this.getRecipe(props.recipe_id)
    }
  }

  getRecipe(id) {
    API.getRecipe(id).then(recipe => {
      this.setState({ recipe: recipe, load: false });
    });
  }

  render () {
    if (this.state.load) {
      return (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    }

    let steps = this.state.recipe.steps.map(step => {
      if (step.is_recipe_id) {
        let recipe = {id: step.is_recipe_id};
        return (
          <li key={step.id} className="row recipe_step is-recipe collection-item avatar">
            <Recipe recipe_id={step.is_recipe_id} as_step={true} />
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
        <div className={"row recipe " + (this.props.as_step && "as-step" || "")}>
          {!this.props.as_step && (
            <div className="row recipe-meta">
              <h4 className="title">{this.state.recipe.name}</h4>
              <div className="col s6">
                <p className="description">{this.state.recipe.description}</p>
              </div>
              <div className="col s6">
                <Ingredients ingredients={this.state.recipe.ingredients} recipe_id={this.state.recipe.id} add />
              </div>
            </div>
          ) || (
            <div className="title">{this.state.recipe.name}</div>
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
