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
    "question": "What is the significance of baptism?",
    "answer": "Baptism is a Christian sacrament that symbolizes purification, initiation, and entry into the Christian faith.",
    "tag": "Christianity",
    "author": "Basil"
  },
  {
    "question": "What are the Five Pillars of Islam?",
    "answer": "The Five Pillars of Islam are the core principles and practices that serve as the foundation of Muslim life and faith.",
    "tag": "Islam",
    "author": "Sheng"
  },
  {
    "question": "What is the role of meditation in Buddhism?",
    "answer": "Meditation plays a vital role in Buddhism as a means to cultivate mindfulness, develop insight, and achieve enlightenment.",
    "tag": "Buddhism",
    "author": "Xiang"
  },
  {
    "question": "What is the concept of heaven in Christianity?",
    "answer": "Heaven in Christianity is the eternal dwelling place of God and the final destination for believers who have accepted Jesus Christ as their Savior.",
    "tag": "Christianity",
    "author": "Basil"
  },
  {
    "question": "What is the significance of the Quran in Islam?",
    "answer": "The Quran is the holy book of Islam, believed to be the word of God as revealed to the Prophet Muhammad. It serves as a guide for Muslims in matters of faith, worship, and daily life.",
    "tag": "Islam",
    "author": "Sheng"
  },
  {
    "question": "What is the role of compassion in Buddhism?",
    "answer": "Compassion is a central virtue in Buddhism, promoting kindness, empathy, and the alleviation of suffering. It is essential in cultivating the path to enlightenment.",
    "tag": "Buddhism",
    "author": "Xiang"
  },
  {
    "question": "What is the sacrament of Eucharist in Christianity?",
    "answer": "The Eucharist, also known as Holy Communion or the Lord's Supper, is a Christian sacrament that commemorates the Last Supper of Jesus Christ with his disciples, where bread and wine are consecrated and consumed as the body and blood of Christ.",
    "tag": "Christianity",
    "author": "Basil"
  },
  {
    "question": "What is the purpose of the Hajj pilgrimage in Islam?",
    "answer": "The Hajj pilgrimage is a significant Islamic practice that involves visiting the holy city of Mecca and performing specific rituals as a demonstration of faith and unity.",
    "tag": "Islam",
    "author": "Sheng"
  },
  {
    "question": "What is the Eightfold Path in Buddhism?",
    "answer": "The Eightfold Path is a foundational teaching in Buddhism that provides a practical guide to living a moral, mindful, and enlightened life. It consists of eight interconnected aspects, including right understanding, intention, speech, action, livelihood, effort, mindfulness, and concentration.",
    "tag": "Buddhism",
    "author": "Xiang"
  },
  {
    "question": "What is the role of prayer in Christianity?",
    "answer": "Prayer is a central practice in Christianity that allows believers to communicate with God, seek guidance, express gratitude, and deepen their relationship with the divine.",
    "tag": "Christianity",
    "author": "Basil"
  },
  {
    "question": "What are the key beliefs of Islam?",
    "answer": "Islam is based on the belief in the oneness of God (Allah) and the prophethood of Muhammad. Muslims also believe in the five pillars of Islam, the Day of Judgment, and the importance of following Islamic law (Sharia).",
    "tag": "Islam",
    "author": "Sheng"
  },
  {
    "question": "What is the concept of Nirvana in Buddhism?",
    "answer": "Nirvana is the ultimate goal in Buddhism, representing the state of liberation and freedom from suffering. It is achieved through the extinguishment of desires, attachment, and the realization of the true nature of reality.",
    "tag": "Buddhism",
    "author": "Xiang"
  },
  {
    "question": "What is the role of the Bible in Christianity?",
    "answer": "The Bible is the holy scripture of Christianity, containing the Old Testament (Hebrew Bible) and the New Testament. It is considered the inspired word of God and serves as a guide for faith, morals, and Christian teachings.",
    "tag": "Christianity",
    "author": "Basil"
  },
  {
    "question": "What is the concept of the Ummah in Islam?",
    "answer": "The Ummah refers to the global community of Muslims, regardless of their nationality, ethnicity, or cultural background. It represents the unity and solidarity among Muslims worldwide.",
    "tag": "Islam",
    "author": "Sheng"
  },
  {
    "question": "What is the role of mindfulness in Buddhism?",
    "answer": "Mindfulness is a core practice in Buddhism that involves cultivating present-moment awareness, non-judgmental attention, and an understanding of the impermanent and interconnected nature of existence.",
    "tag": "Buddhism",
    "author": "Xiang"
  },
  {
    "question": "What is the concept of sin in Christianity?",
    "answer": "Sin in Christianity refers to actions, thoughts, or behaviors that are considered to be against the will of God and harm one's relationship with Him. It is believed that through repentance and forgiveness, believers can be redeemed from sin.",
    "tag": "Christianity",
    "author": "Basil"
  }
]

# seed data for chats question:string answer:string flagged:boolean

chats = [
  {
    "question": "What are the major religions in the world?",
    "answer": "The major religions in the world include Christianity, Islam, Hinduism, Buddhism, and Judaism.",
    "flagged": false
  },
  {
    "question": "What is the holy book of Islam?",
    "answer": "The holy book of Islam is the Quran.",
    "flagged": false
  },
  {
    "question": "Who is considered the founder of Buddhism?",
    "answer": "Siddhartha Gautama, also known as Buddha, is considered the founder of Buddhism.",
    "flagged": true
  },
  {
    "question": "What are the Five Pillars of Islam?",
    "answer": "The Five Pillars of Islam are Shahada (faith), Salah (prayer), Zakat (charity), Sawm (fasting), and Hajj (pilgrimage).",
    "flagged": false
  },
  {
    "question": "What is the concept of karma in Hinduism?",
    "answer": "In Hinduism, karma refers to the consequences of one's actions that determine their future existence and experiences.",
    "flagged": true
  },
  {
    "question": "How is God referred to in Judaism?",
    "answer": "In Judaism, God is often referred to as Yahweh or Adonai.",
    "flagged": false
  },
  {
    "question": "What are the Four Noble Truths in Buddhism?",
    "answer": "The Four Noble Truths in Buddhism are the truth of suffering, the truth of the cause of suffering, the truth of the end of suffering, and the truth of the path that leads to the end of suffering.",
    "flagged": false
  },
  {
    "question": "What is the sacred text of Christianity?",
    "answer": "The sacred text of Christianity is the Bible.",
    "flagged": false
  },
  {
    "question": "What is the significance of Mecca in Islam?",
    "answer": "Mecca is the holiest city in Islam and the birthplace of Prophet Muhammad. It is the destination of the Hajj pilgrimage.",
    "flagged": false
  },
  {
    "question": "What are the main branches of Judaism?",
    "answer": "The main branches of Judaism are Orthodox, Conservative, Reform, and Reconstructionist.",
    "flagged": true
  }
]



  
questions.each do |q|
Faq.create!(
      question: q[:question],
      answer: q[:answer],
      tag: q[:tag],
      author: q[:author]
    )
end

chats.each do |c|
  Chat.create!(
    question: c[:question],
    answer: c[:answer],
    flagged: c[:flagged]
  )
end


# Create sessions - title and each gets 2 faqs

sessions = [
    {
      title: "Christianity",
      faqs: [1,4,5,10],
      author: "Basil"
    },
    {
      title: "Islam",
      faqs: [2,5,6,8],
      author: "Sheng Xiang"
    },
  ]

sessions.each do |s|
  session = Session.create!(title: s[:title], author: s[:author])
  s[:faqs].each do |faq_id|
    FaqSession.create!(session_id: session.id, faq_id: faq_id)
  end
end
    