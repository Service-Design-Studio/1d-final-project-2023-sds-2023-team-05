Feature: Chatbot 

    Narrative
        As a: learner who is preparing for the upcoming training session
        I want: to be able to ask questions in the chatbot if the customised FAQ did not answer my inquiry
        so that: I can continue with the practical part of the workshop

    @STUDENT
    Scenario: Learner sees a customised FAQ page for the training session
        Given I am on the sign in page
        When I key in the class code 725018
        Then I will see the customised FAQ page with the following questions:
            | What are the Five Pillars of Islam? |
            | What is the significance of the Quran in Islam? |
            | What is the role of compassion in Buddhism? |
            | What is the purpose of the Hajj pilgrimage in Islam? |
    
    @STUDENT
    Scenario: Learner sees the chatbot page
        Given I am on the customised FAQ page
        When I click on the chatbot icon
        Then I will see the chatbot page

    @STUDENT
    Scenario: Learner asks an interfath related question in the chatbot
        Given I am on the chatbot page
        When I ask my interfaith related question with the prompt 'What is your name?'
        Then I will receive an answer that contains the text 'Kampung Kaki'

    @STUDENT
    Scenario: Learner flags an inappropriate answer given by the chatbot
        Given I have already asked my interfaith related question
        When I click the flag button
        Then I will see a pop up with the question 'Why are you flagging this answer?'
        When I click the option 'Rude or Offensive'
        When I press the button 'Flag Question'
        Then I will return to the Chatbot page

    @STUDENT
     Scenario: Learner asks a non-interfaith related question in the chatbot
        Given I am on the chatbot page
        When I ask my non-interfaith related question with the prompt 'Who is Taylor Swift?'
        Then I will receive an answer that contains the text 'interfaith focus chatbot'

