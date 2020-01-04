class DishesController < ApplicationController
  def get_dish id
    Dish
      .find(params[id])
      .as_json(include: [
        :ingredients,
        :weeklists,
        :recipes => {
          :include => :recipe_steps
        }
      ])
  end

  def index
    @dishes = Dish.all
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
