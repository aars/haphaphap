class RecipesController < ApplicationController
  def get_recipe id
    Recipe
      .find(params[id])
      .as_json(include: [:recipe_steps, :ingredients])
  end

  def index
    @recipes = Recipes.all
  end
  def show
    @recipe = get_recipe :id
  end
  def edit
    @recipe = get_recipe :id
  end
  def add
  end
end
