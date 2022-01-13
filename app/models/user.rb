class User < ApplicationRecord
    has_secure_password
    validates :username, :password, :password_confirmation, presence: true
    validates :username, uniqueness: true

    has_many :instruments
    has_many :setups
    has_many :categories, through: :instruments

    
end
