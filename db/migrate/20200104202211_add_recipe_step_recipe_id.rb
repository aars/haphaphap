class AddRecipeStepRecipeId < ActiveRecord::Migration[5.2]
  def change
    add_column :recipe_steps, :recipe_id, :integer
  end
end
