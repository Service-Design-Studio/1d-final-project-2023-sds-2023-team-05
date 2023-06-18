class FaqSession < ApplicationRecord
  belongs_to :faq
  belongs_to :session
end
