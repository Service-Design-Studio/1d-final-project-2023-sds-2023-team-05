class Session < ApplicationRecord
    has_many :faq_sessions
    has_many :faqs, through: :faq_sessions
end
