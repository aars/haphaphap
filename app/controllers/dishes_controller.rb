class DishesController < ApplicationController
  def get_dish id
    associations = [:ingredients, :weeklists]
    Dish
      .eager_load(*associations)
      .find(params[id])
      .as_json(include: associations)
  end
  def index
  end
  def show
    @dish = get_dish :id
  end
  def edit
    @dish = get_dish :id
  end
  def add
  end
end
