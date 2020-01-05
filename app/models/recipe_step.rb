class RecipeStep < ApplicationRecord
  belongs_to :recipe
  has_many :recipe_step_ingredients
end
