class CreateRecipeIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :recipe_ingredients do |t|
      t.integer :amount
      t.string :unit

      t.timestamps
    end
  end
end
