Feature: Chatbot 

    Narrative
        As a: learner who is preparing for the upcoming training session
        I want: to be able to ask questions in the chatbot if the customised FAQ did not answer my inquiry
        so that: I can continue with the practical part of the workshop
    
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
    Scenario: Learner flags an inappropriate answer with the reason 'Rude or Offensive'
        Given I have already asked my interfaith related question
        When I click the flag button
        Then I will see a pop up with the question 'Why are you flagging this answer?'
        When I click the option 'Rude or Offensive'
        When I press the button 'Flag Question'
        Then I will return to the Chatbot page

    @STUDENT
    Scenario: Learner flags an inappropriate answer with the reason 'Inaccurate information'
        Given I am at the flag pop up
        When I click the option 'Inaccurate information'
        When I press the button 'Flag Question'
        Then I will return to the Chatbot page

    @STUDENT
    Scenario: Learner flags an inappropriate answer with the reason 'Does not answer the question'
        Given I am at the flag pop up
        When I click the option 'Does not answer the question'
        When I press the button 'Flag Question'
        Then I will return to the Chatbot page

    @STUDENT
    Scenario: Learner flags an inappropriate answer with the reason 'Religious Propaganda'
        Given I am at the flag pop up
        When I click the option 'Religious Propaganda'
        When I press the button 'Flag Question'
        Then I will return to the Chatbot page

    @STUDENT
    Scenario: Learner flags an inappropriate answer with the reason 'Others'
        Given I am at the flag pop up
        When I click the option 'Others'
        Then I will see a text field
        When I enter a reason with text 'Sample Reason'
        When I press the button 'Flag Question'
        Then I will return to the Chatbot page

    @STUDENT
     Scenario: Learner asks a non-interfaith related question in the chatbot
        Given I am on the chatbot page
        When I ask my non-interfaith related question with the prompt 'Who is Taylor Swift?'
        Then I will receive an answer that contains the text 'I am not'