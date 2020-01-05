class RemoveDurationFromRecipes < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :duration
  end
end
