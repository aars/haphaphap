class Recipe < ApplicationRecord
  belongs_to :dish
  has_and_belongs_to_many :recipe_steps
  has_and_belongs_to_many :ingredients
end
