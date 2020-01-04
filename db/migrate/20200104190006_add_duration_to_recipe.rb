class AddDurationToRecipe < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :duration, :integer
  end
end
