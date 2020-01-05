class Recipe < ApplicationRecord
  belongs_to :dish, optional: true
  has_many :recipe_steps
  has_many :recipe_ingredients
end
