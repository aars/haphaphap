import React from "react"

import dishImages from 'components/DishImages'
class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: props.dish,
      ingredients: props.dish.ingredients,
      editable: false,
      addingIngredient: false,
      isDeleting: false,
    };
    console.log(this.state.dish);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
  }

  // Handles dish property edits. Relationships (lists, recipes) handled seperately.
  handleEdit() {
    if (this.state.editable) {
      this.setState({
        dish: {
          id: this.props.dish.id,
          name: this.name.value,
          description: this.description.value,
        }
      });
      // this.props.handleUpdate(dish);
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

  handleAddIngredient() {
    if (this.state.addingIngredient) {
      if (this.newIngredient && this.newIngredient.value) {
        let ingredients = this.state.ingredients;
        ingredients.push({
          id: ingredients.length+1,
          name: this.newIngredient.value
        });
        this.setState({ ingredients: ingredients });
      }
    }
    this.setState({ addingIngredient: !this.state.addingIngredient });
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

    let addIngredientBtnClasses = [
      "btn", "btn-floating", "halfway-fab", "btn-small",
      "waves-effect", "waves-light", "blue", "right",
      (this.state.addingIngredient ? "darken-2" : "lighten-3")
    ];

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

              <h5 className="title">Ingredients <span>(for recipe #1)</span></h5>
              <ul className="ingredients">
                {this.state.ingredients.length && this.state.ingredients.map(ingredient => (
                  <li className="ingredient" key={ingredient.id}>{ingredient.name}</li>)
                ) || (
                  <li className="placeholder">No ingredients yet.</li>
                )}

                <li className="add">
                  <a className={addIngredientBtnClasses.join(' ')} onClick={this.handleAddIngredient}>
                    <i className="material-icons">add</i>
                  </a>
                </li>
                {this.state.addingIngredient && (
                  <li className="add-input input-field">
                    <form onSubmit={this.handleAddIngredient}>
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
              <p>
              </p>
            </div>
            <div className="col s6 dish-image">
              <img className="responsive-img" src={dishImages[this.props.dish.id] || dishImages['default']} />
              <a className="btn-floating waves-effect waves-light blue right">
                <i className="material-icons">photo_camera</i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dish
