class AddDescriptionToDish < ActiveRecord::Migration[5.2]
  def change
    add_column :dishes, :description, :text, default: 'Insert dish description'
  end
end
