class Dish < ApplicationRecord
    has_and_belongs_to_many :weeklists
    has_many :recipes

    def ingredients
      binding.pry
      self.recipes.first ? self.recipes.first.ingredients : []
    end
end
