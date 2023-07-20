class Session < ApplicationRecord
    has_many :faq_sessions
    has_many :faqs, through: :faq_sessions

    validates :title, presence: true
    validates :author, presence: true
    before_create :generate_classcode
    
    def generate_classcode
        if self.classcode
            # If the classcode is already set, no need to generate a new one
            return
        else
            self.classcode = rand(100000..999999)
            while Session.exists?(classcode: self.classcode)
                self.classcode = rand(100000..999999)
            end
        end
    end
    
end
