const NewDish = props => {
    let formFields = {};
  
    return (
      <form
        style={{
          margin: "1em",
          padding: "1em",
          border: "1px solid #ddd"
        }}
        onSubmit={e => {
          props.handleFormSubmit(formFields.name.value);
          e.target.reset();
          e.preventDefault();
        }}
      >
        <input
          ref={input => (formFields.name = input)}
          placeholder="Enter the name"
        />
        
        <button>Submit</button>
      </form>
    );
  };