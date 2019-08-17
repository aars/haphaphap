import React from "react"
import PropTypes from "prop-types"

const NewDish = props => {
  let formFields = {};

  return (
    <form onSubmit={e => {
        props.handleFormSubmit(formFields.name.value);
        e.target.reset();
        e.preventDefault();
      }}
    >
      <input
        ref={input => (formFields.name = input)}
        placeholder="Name"
      />

      <button className="btn blue lighten-2">Submit</button>
    </form>
  );
};

export default NewDish
