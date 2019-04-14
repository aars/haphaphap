class AssociateWeeklistsDishesIngredients < ActiveRecord::Migration[5.2]
  def change
    create_join_table :weeklists, :dishes
    create_join_table :dishes, :ingredients
  end
end
