import React from "react"
import PropTypes from "prop-types"
class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: props.recipe.recipe_steps
    };
  }

  render () {
    return (
      <React.Fragment>
        <div className="row recipe">
          <h5 className="name">{this.props.recipe.name}</h5>
          <p className="description">{this.props.recipe.description}</p>

          <h6>Steps</h6>
          <ol className="collection">
          {this.state.steps.map(step => (
            <li key={step.id} className="row recipe_step collection-item avatar">
              {step.is_recipe_id && ( <div>is_recipe</div> ) || (
                <div>
                  <span className="step-duration">
                    <i className="material-icons">access_time</i>
                    <span>{step.duration}min</span>
                  </span>
                  <p>{step.instruction}</p>
                </div>
              )}
            </li>
          ))}
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
