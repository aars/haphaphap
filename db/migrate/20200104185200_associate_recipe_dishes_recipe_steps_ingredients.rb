class AssociateRecipeDishesRecipeStepsIngredients < ActiveRecord::Migration[5.2]
  def change
    create_join_table :recipes, :recipe_steps
    create_join_table :recipes, :ingredients
    create_join_table :recipe_steps, :ingredients
  end
end
