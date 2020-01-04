import PropTypes from "prop-types"

class API {
  constructor(base) {
    this.base = base;
  }

  getDishes() {
    return fetch(`${this.base}/dishes.json`)
      .then(response => {
        return response.json();
      })
  }

  createDish(name) {
    return fetch(`${this.base}/dishes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({dish: {name: name}})
    }).then(response => {
      return response.json();
    });
  }

  deleteDish(id) {
    return fetch(`${this.base}/dishes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  updateDish(dish) {
    return fetch(`${this.base}/dishes/${dish.id}`, {
      method: "PUT",
      body: JSON.stringify({ dish: dish }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      return response.json();
    });
  }

  getRecipe(id) {
    return fetch(`${this.base}/recipes/${id}`)
      .then(response => {
        return response.json();
      })
  }

}

const api = new API('/api/v1');
export default api
