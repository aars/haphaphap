class AssociateRecipeDish < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :dish_id, :integer
  end
end
