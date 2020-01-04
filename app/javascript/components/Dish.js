import React from "react"

import dishImages from 'components/DishImages'
class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      dish: props.dish,
    };
    console.log(props.dish);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if (this.state.editable) {
      let dish = {
        id: this.props.dish.id,
        name: this.name.value,
        description: this.description.value
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
    let edit = this.state.editable ? (
      <button className="btn waves-effect waves-light green btn-small right" onClick={this.handleEdit}>
        <i className="material-icons">check</i>
      </button>
    ) : (
      <button className="btn waves-effect waves-light blue btn-small right" onClick={this.handleEdit}>
        <i className="material-icons">edit</i>
      </button>
    );

    return (
      <React.Fragment>
        <div className={'dish-page ' + (this.state.editable ? 's-editable' : '')}>
          <div className="row">
            <div className="col s9">
              <h4>{name}</h4>
            </div>
            <div className="col s3 top-actions">
              {edit}
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <p className="description">{description}</p>

              <h6>Ingredients</h6>
              <ul>
                <li>ingredient</li>
                <li>ingredient</li>
                <li>ingredient</li>
                <li>ingredient</li>
                <li>ingredient</li>
              </ul>
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
