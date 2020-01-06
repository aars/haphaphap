class Recipe < ApplicationRecord
  belongs_to :dish, optional: true
  has_many :recipe_steps
  has_many :recipe_ingredients

  alias_attribute :steps, :recipe_steps

  # collect ingredients from this recipe and any sub-recipe (step.is_recipe_id).
  # combine ingredient quantities.
  def ingredients
    (self.recipe_ingredients + self.steps.select{ |i| i.is_recipe_id }.map{|i|
      Recipe.includes(:recipe_ingredients).find(i.is_recipe_id).ingredients
    }.compact).flatten
  end
end
