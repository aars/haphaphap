class RecipeStep < ApplicationRecord
  has_and_belongs_to_many :recipes
  has_and_belongs_to_many :ingredients
end
