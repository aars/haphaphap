class DishesController < ApplicationController
    def index
    end
    def show
      @dish = Dish.includes(:ingredients).find(params[:id])
      binding.pry
    end
    def edit
      @dish = Dish.find(params[:id])
    end
    def add
    end
end
