class DishesController < ApplicationController
  def get_dish id
    Dish
      .find(params[id])
      .as_json(include: [
        :weeklists,
        :recipes,
        :ingredients
      ])
  end

  def index
    @dishes = Dish.all
  end
  def show
    @dish = get_dish :id
  end
end
