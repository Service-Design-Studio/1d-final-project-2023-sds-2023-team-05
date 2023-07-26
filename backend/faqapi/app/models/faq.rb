class Faq < ApplicationRecord
    has_many :faq_sessions, dependent: :destroy
    has_many :sessions, through: :faq_sessions

    validates :question, presence: true
    validates :answer, presence: true
    validates :tag, presence: true
    validates :author, presence: true
    
end
