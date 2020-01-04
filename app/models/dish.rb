class Dish < ApplicationRecord
    has_and_belongs_to_many :ingredients
    has_and_belongs_to_many :weeklists
end
