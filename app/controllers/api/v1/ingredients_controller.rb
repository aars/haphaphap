class Api::V1::IngredientsController < ApplicationController
    def index
      render json: Ingredient.all
    end
  
    def create
      ingredient = Ingredient.create(ingredient_params)
      render json: ingredient
    end
  
    def destroy
      Ingredient.destroy(params[:id])
    end
  
    def update
      ingredient = Ingredient.find(params[:id])
      ingredient.update_attributes(ingredient_params)
      render json: ingredient
    end
  
    private
  
    def ingredient_params
      params.require(:ingredient).permit(:id, :name)
    end
  end