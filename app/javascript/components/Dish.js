import React from "react"

import dishImages from 'components/DishImages'
class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      dish: props.dish,
      ingredients: props.dish.ingredients
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  // Handles dish property edits. Relationships (lists, recipes) handled seperately.
  handleEdit() {
    if (this.state.editable) {
      let dish = {
        id: this.props.dish.id,
        name: this.name.value,
        description: this.description.value,
      };
      this.state.dish = dish;
      // this.props.handleUpdate(dish);
    }
    this.setState({
      editable: !this.state.editable
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

    return (
      <React.Fragment>
        <div className={'dish-page ' + (this.state.editable ? 's-editable' : '')}>
          <div className="row flex">
            <div className="col s10">
              <h4>{name}</h4>
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
                  <button className="btn waves-effect waves-light btn-small red darken-4" onClick={this.handleEdit}>
                    <i className="material-icons">delete</i>
                  </button>
                </div>
              }
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <p className="description">{description}</p>

              <h5>Ingredients</h5>
              <ul className="ingredients">
                {this.state.ingredients.length && this.state.ingredients.map(ingredient => (
                  <li className="ingredient" key={ingredient.id}>{ingredient.name}</li>)
                ) || (
                  <li className="placeholder">No ingredients yet.</li>
                )}
              </ul>
              <p>
                <a className="btn btn-floating btn-small waves-effect waves-light green lighten-3">
                  <i className="material-icons">add</i>
                </a>
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
