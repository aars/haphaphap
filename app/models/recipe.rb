class Recipe < ApplicationRecord
  belongs_to :dish, optional: true
  has_many :recipe_steps
  has_many :recipe_ingredients

  alias_attribute :steps, :recipe_steps
  alias_attribute :ingredients, :recipe_ingredients
end
