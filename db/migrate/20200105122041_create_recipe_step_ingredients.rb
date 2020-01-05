class CreateRecipeStepIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :recipe_step_ingredients do |t|
      t.integer :recipe_step_id
      t.integer :ingredient_id
      t.integer :quantity
      t.string :unit

      t.timestamps
    end
  end
end
