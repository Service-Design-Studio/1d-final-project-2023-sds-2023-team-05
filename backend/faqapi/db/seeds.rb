# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# seeds.rb

# Create sample data for interfaith FAQ

questions = [
    {
      question: "What is the significance of baptism?",
      answer: "Baptism is a Christian sacrament that symbolizes purification, initiation, and entry into the Christian faith.",
      tag: "Christianity",
      author: "John Smith"
    },
    {
      question: "What are the Five Pillars of Islam?",
      answer: "The Five Pillars of Islam are the core principles and practices that serve as the foundation of Muslim life and faith.",
      tag: "Islam",
      author: "Emily Johnson"
    },
    {
      question: "What is the role of meditation in Buddhism?",
      answer: "Meditation plays a vital role in Buddhism as a means to cultivate mindfulness, develop insight, and achieve enlightenment.",
      tag: "Buddhism",
      author: "Michael Anderson"
    },
    {
      question: "What dietary restrictions are followed in Judaism?",
      answer: "Judaism has dietary laws known as Kashrut, which includes guidelines on what foods are permissible (kosher) and what foods are forbidden.",
      tag: "Judaism",
      author: "Sarah Thompson"
    },
    {
      question: "What are some common Hindu festivals?",
      answer: "Hinduism celebrates a wide range of festivals throughout the year, including Diwali, Holi, Navaratri, and Durga Puja.",
      tag: "Hinduism",
      author: "David Wilson"
    },
    {
      question: "What is the concept of karma in Sikhism?",
      answer: "In Sikhism, karma refers to the law of cause and effect, where one's actions and intentions have consequences in this life and future lives.",
      tag: "Sikhism",
      author: "Sophia Lee"
    },
    {
      question: "What is the significance of the Torah in Judaism?",
      answer: "The Torah is the sacred text of Judaism, containing the teachings, laws, and narratives that form the foundation of Jewish faith and identity.",
      tag: "Judaism",
      author: "Ryan Adams"
    },
    {
      question: "What is the purpose of the Hajj pilgrimage in Islam?",
      answer: "The Hajj pilgrimage is a significant Islamic practice that involves visiting the holy city of Mecca and performing specific rituals as a demonstration of faith and unity.",
      tag: "Islam",
      author: "Olivia Parker"
    },
    {
      question: "What are the key beliefs of Taoism?",
      answer: "Taoism emphasizes living in harmony with the Tao, which is the fundamental force that flows through all things. It promotes simplicity, balance, and the pursuit of spiritual enlightenment.",
      tag: "Taoism",
      author: "Daniel Brown"
    },
    {
      question: "What is the role of prayer in Christianity?",
      answer: "Prayer is a central practice in Christianity that allows believers to communicate with God, seek guidance, express gratitude, and deepen their relationship with the divine.",
      tag: "Christianity",
      author: "Emma Garcia"
    },
  ]
  
questions.each do |q|
Faq.create!(
      question: q[:question],
      answer: q[:answer],
      tag: q[:tag],
      author: q[:author]
    )
end


# Create sessions - title and each gets 2 faqs

sessions = [
    {
      title: "Christianity",
      faqs: [1,4,5,10]
    },
    {
      title: "Islam",
      faqs: [2,5,6,8]
    },
  ]

sessions.each do |s|
  session = Session.create!(title: s[:title])
  s[:faqs].each do |faq_id|
    FaqSession.create!(session_id: session.id, faq_id: faq_id)
  end
end
    