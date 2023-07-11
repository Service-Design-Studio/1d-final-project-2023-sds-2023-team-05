class Session < ApplicationRecord
    has_many :faq_sessions
    has_many :faqs, through: :faq_sessions

    validates :title, presence: true
    validates :author, presence: true
    before_create :generate_classcode
    
    # auto generate unique 6 digit classcode
    def generate_classcode
        loop do
            self.classcode = SecureRandom.hex(3)
            break unless Session.where(classcode: classcode).exists?
        end
    end
end
