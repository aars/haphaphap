import React from "react"
import PropTypes from "prop-types"

import API from "../api"

function handleFormSubmit(name) {
  API.createDish(name).then(dish => {
    window.location.pathname = `/dishes/${dish.id}`;
  });
}

const NewDish = props => {
  let formFields = {};

  return (
    <form onSubmit={e => {
        handleFormSubmit(formFields.name.value);
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
