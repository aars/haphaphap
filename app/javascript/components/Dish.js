import React from "react";

import API from "../api";
import dishImages from "components/DishImages";
import Ingredients from "components/Ingredients";
import Recipe from 'components/Recipe';

class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: props.dish,
      ingredients: props.dish.ingredients,
      recipes: props.dish.recipes,
      editable: false,
      isDeleting: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Handles dish property edits. Relationships (lists, recipes) handled seperately.
  handleEdit() {
    if (this.state.editable) {
      let dish = {
        id: this.props.dish.id,
        name: this.name.value,
        description: this.description.value
      }
      API.updateDish(dish).then(dish => {
        this.setState({ dish: dish });
      });
    }
    this.setState({
      editable: !this.state.editable
    });
  }

  handleDelete() {
    this.setState({
      isDeleting: !this.state.isDeleting
    });
  }

  render() {
    let name = this.state.editable ? (
      <input
        type="text"
        ref={input => (this.name = input)}
        defaultValue={this.state.dish.name}
      />
    ) : (
      this.state.dish.name
    );
    let description = this.state.editable ? (
      <textarea className="materialize-textarea" id="description"
        type="text"
        ref={input => (this.description = input)}
        defaultValue={this.state.dish.description}
      />
    ) : (
      this.state.dish.description
    );

    let deleteBtnClasses = ["btn", "waves-effect", "waves-light"];
    if (this.state.isDeleting) {
      deleteBtnClasses.push("deep-orange", "darken-4", "yellow-text", "text-accent-3");
    } else {
      deleteBtnClasses.push("white", "deep-orange-text", "text-lighten-2");
    }

    return (
      <React.Fragment>
        <div className={'dish-page ' + (this.state.editable ? 's-editable' : '')}>
          <div className="row flex">
            <div className="col s10">
              <h4 className="name">{name}</h4>
            </div>
            <div className="col s2 top-actions valign-wrapper">
              {this.props.editable &&
                <div className="actions flex">
                  <button className="btn waves-effect waves-light blue btn-small" onClick={this.handleEdit}>
                    {this.state.editable ? (
                      <i className="material-icons">check</i>
                    ) : (
                      <i className="material-icons">edit</i>
                    )}
                  </button>

                  <button className={deleteBtnClasses.join(' ')} onClick={this.handleDelete}>
                    <i className="material-icons">delete</i>
                  </button>
                </div>
              }
            </div>
          </div>

          <div className="row">
            <div className="col s6 ingredients">
              <p className="description">{description}</p>
              <Ingredients ingredients={this.state.ingredients} total />
            </div>

            <div className="col s6 dish-image">
              <img className="responsive-img" src={dishImages[this.props.dish.id] || dishImages['default']} />
              <a className="btn-floating waves-effect waves-light blue right">
                <i className="material-icons">photo_camera</i>
              </a>
            </div>
          </div>

          <div className="row recipes">
            <h4>Recipes</h4>
            {!this.state.recipes.length && (
              <p class="placeholder">No recipes yet.</p>
            ) || this.state.recipes.map(recipe => (<Recipe key={recipe.id} recipe_id={recipe.id} />))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dish
