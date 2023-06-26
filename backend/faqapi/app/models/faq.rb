class Faq < ApplicationRecord
    has_many :faq_sessions, dependent: :destroy
    has_many :sessions, through: :faq_sessions
end
