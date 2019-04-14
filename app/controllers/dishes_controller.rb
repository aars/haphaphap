class DishesController < ApplicationController
    def index
    end
    def show
        @dish = Dish.find(params[:id])
    end
  end