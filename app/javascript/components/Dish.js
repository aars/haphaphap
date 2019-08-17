import React from "react"
import DishImage1 from 'images/dishes/random01.jpg'
import DishImage2 from 'images/dishes/random02.jpg'
import DishImage3 from 'images/dishes/random03.jpg'

const dishImages = [DishImage1,DishImage2,DishImage1,DishImage3];
class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if (this.state.editable) {
      let name = this.name.value;
      let id = this.props.dish.id;
      let dish = { id: id, name: name };
      this.props.handleUpdate(dish);
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
        defaultValue={this.props.dish.name}
      />
    ) : (
      <h6>{this.props.dish.name}</h6>
    );

    return (
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img className="responsive-img" src={dishImages[this.props.dish.id]} />
            <span className="card-title"><h4 className="text-shadow">{this.props.dish.name}</h4></span>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>

          </div>

          <div className="card-content">
            <p>
              Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
            </p>
          </div>

          <div className="card-action">
            <a href="#" onClick={() => this.handleEdit()}>
              {this.state.editable ? "Submit" : "Edit"}
            </a>
            {!this.state.editable && (
              <a className="red-text" onClick={() => this.props.handleDelete(this.props.dish.id)}>
                Delete
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Dish
