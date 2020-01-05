class Recipe < ApplicationRecord
  belongs_to :dish, optional: true
  has_many :recipe_steps
  has_many :recipe_ingredients

  alias_attribute :steps, :recipe_steps

  # collect ingredients from this recipe and any sub-recipe (step.is_recipe_id)
  def ingredients
    (self.recipe_ingredients + self.steps.map{|i|
      Recipe.find(i.is_recipe_id).ingredients if i.is_recipe_id
    }.compact).flatten
  end
end
