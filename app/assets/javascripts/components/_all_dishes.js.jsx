class AllDishes extends React.Component {
    render() {
      var dishes = this.props.dishes.map(dish => {
        return (
          <div key={dish.id}>
            <Dish
              dish={dish}
              handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
            />
          </div>
        );
      });
  
      return <div>{dishes}</div>;
    }
  }