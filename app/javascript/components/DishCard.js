import React from "react"

import dishImages from 'components/DishImages'
class DishCard extends React.Component {
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
        <div className="card dish orange lighten-3">
          <div className="card-image">
            <img className="responsive-img" src={dishImages[this.props.dish.id] || dishImages['default']} />
            <span className="card-title">
              <a href={"/dishes/"+this.props.dish.id}  className="text-shadow">
                <h4>{this.props.dish.name}</h4>
              </a>
           </span>

            <a className="btn-floating halfway-fab waves-effect waves-light blue">
              <i className="material-icons">playlist_add</i>
            </a>
          </div>

          <div className="card-content">
            <p>
              Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DishCard
