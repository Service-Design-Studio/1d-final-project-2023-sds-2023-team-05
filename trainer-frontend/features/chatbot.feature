Feature: Chatbot 

    Narrative
        As a: learner who is preparing for the upcoming training session
        I want: to be able to ask questions in the chatbot if the customised FAQ did not answer my inquiry
        so that: I can continue with the practical part of the workshop

    Scenario: Learner navigates to chatbot to ask an interfaith question
        Given I am on the sign in page
        When I key in the class code 725018
        Then I will see the customised FAQ page with 4 questions
        When I click on the chatbot icon
        And I ask the question with the prompt " "
        I will receive a answer with the text " "

    Scenario: Learner navigates to chatbot to ask a non-related interfaith question
        Given I am on the sign in page
        When I key in the class code 725018
        Then I will see the customised FAQ page with 4 questions
        When I click on the chatbot icon
        And I ask the question with the prompt " "



