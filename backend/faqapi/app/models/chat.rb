# app/models/chat.rb

class Chat < ApplicationRecord
    # Validations
    validates :question, presence: true
    validates :answer, presence: true
  
    # Associations (if any)
    # Example:
    # has_many :messages
  end
  