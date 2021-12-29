class Instrument < ApplicationRecord
    validates :model_name, :brand_name, :description, presence: true
    belongs_to :user 
    
end
