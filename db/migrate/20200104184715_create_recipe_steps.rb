class CreateRecipeSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :recipe_steps do |t|
      t.text :instruction
      t.integer :duration

      t.timestamps
    end
  end
end
