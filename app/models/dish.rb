class Dish < ApplicationRecord
    has_many :ingredients 
    has_many :weeklists
end
