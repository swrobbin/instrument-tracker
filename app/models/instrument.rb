class Instrument < ApplicationRecord
    validates :name, :brand, :description, presence: true
     
    belongs_to :user 
    belongs_to :category 
    has_and_belongs_to_many :setups

    accepts_nested_attributes_for :category, reject_if: :all_blank

    
end
