class RemoveDishIngredients < ActiveRecord::Migration[5.2]
  def change
    drop_join_table :dishes, :ingredients
  end
end
