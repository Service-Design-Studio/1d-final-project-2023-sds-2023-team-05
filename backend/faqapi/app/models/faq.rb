class Faq < ApplicationRecord
    has_many :faq_sessions
    has_many :sessions, through: :faq_sessions
end
