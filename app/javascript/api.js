import PropTypes from "prop-types"

class Cache {
  constructor(types) {
    this._cache = {};
    (types || []).forEach(this.addType.bind(this));
  }

  addType(type) {
    this._cache[type] = {};
  }

  get(type, id) {
    return new Promise((resolve, reject) => {
      if (id === null) return resolve(this._cache[type]);

      if (id in this._cache[type]) {
        const data = this._cache[type][id]['data'];
        data._cached_at = this._cache[type][id].cached_at;
        resolve(data);
      }

      reject();
    });
  }

  set(type, id, data) {
    this._cache[type][id] = {
      'data': data,
      'cached_at': new Date(),
    };
  }
}

class API {
  constructor(base, cache) {
    this.base = base;
    this.cache = cache;
    console.log(this.cache);
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
    // TODO: Auto set/load cache items.
    return new Promise((resolve, reject) => {
      this.cache.get('recipe', id).then(resolve).catch(() => {
        fetch(`${this.base}/recipes/${id}`).then(response => {
          return response.json().then(data => {
            this.cache.set('recipe', id, data);
            resolve(data);
          });
        });
      });
    });
  }
  /*
   fetch(`${this.base}/recipes/${id}`)
          .then(response => {
            const data = response.json();
            console.log('data', data);
            this.cache.set('recipe', id, data);
            resolve(data);
          });
  */
  createIngredient(ingredient) {
    return fetch(`${this.base}/ingredients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ingredient: ingredient})
    }).then(response => {
      return response.json();
    });
  }


}

const cache = new Cache(['dish', 'recipe', 'ingredient']);
const api = new API('/api/v1', cache);
export default api
