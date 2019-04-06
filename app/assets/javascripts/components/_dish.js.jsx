
class Dish extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        editable: false
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
        <h3>{this.props.dish.name}</h3>
      );
     
      return (
        <div
          style={{
            margin: "1em",
            padding: "1em",
            border: "1px solid #ddd"
          }}
        >
          {name}
          
          <button onClick={() => this.handleEdit()}>
            {this.state.editable ? "Submit" : "Edit"}
          </button>
          {!this.state.editable && (
            <button
              onClick={() => this.props.handleDelete(this.props.dish.id)}
            >
              Delete
            </button>
          )}
        </div>
      );
    }
  }