class AddRecipeStepTitle < ActiveRecord::Migration[5.2]
  def change
    add_column :recipe_steps, :title, :string
  end
end
