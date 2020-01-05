class RecipeIngredients < ActiveRecord::Migration[5.2]
  def change
    drop_join_table :ingredients, :recipes
    add_column :recipe_ingredients, :recipe_id, :int
    add_column :recipe_ingredients, :ingredient_id, :int
    remove_column :recipe_ingredients, :amount
    add_column :recipe_ingredients, :quantity, :int
  end
end
