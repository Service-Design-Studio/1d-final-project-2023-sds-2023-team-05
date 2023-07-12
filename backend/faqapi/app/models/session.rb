class Session < ApplicationRecord
    has_many :faq_sessions
    has_many :faqs, through: :faq_sessions

    validates :title, presence: true
    validates :author, presence: true
    before_create :generate_classcode
    
    def generate_classcode
        self.classcode = rand(100000..999999)
        while Session.exists?(classcode: self.classcode)
            self.classcode = rand(100000..999999)
        end
    end
end
