class RemoveIngredientsRecipeStepsJoinTable < ActiveRecord::Migration[5.2]
  def change
    drop_join_table :ingredients, :recipe_steps
  end
end
