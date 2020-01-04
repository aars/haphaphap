class Api::V1::DishesController < ApplicationController
  def index
    render json: Dish.all
  end

  def create
    dish = Dish.create(dish_params)
    render json: dish
  end

  def destroy
    Dish.destroy(params[:id])
  end

  def update
    dish = Dish.find(params[:id])
    dish.update_attributes(dish_params)
    render json: dish
  end

  private

  def dish_params
    params.require(:dish).permit(:id, :name, :description)
  end
end
