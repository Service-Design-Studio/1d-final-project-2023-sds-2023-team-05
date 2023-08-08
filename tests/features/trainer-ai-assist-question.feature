Feature: Ai Assist Question

    Narrative
        As a: trainer who is creating questions and answers
        I want: to be able automatically generate my answers for a chosen question
        so that: expedtite the creation of my Q&A

    @TRAINER
    Scenario: Trainer generates response from question about Christianity
        Given I am at the Add Question pop up
        When I enter the question with text 'What is the bible?'
        When I choose the tag with text 'Christainity'
        When I click the button 'AI Assist'
        Then I will see a generated answer that contains the word 'Bible'
        When I click the 'Submit' button
        Then I will be on the question page
    
    @TRAINER
    Scenario: Trainer generates response from question about Islam
        Given I am at the Add Question pop up
        When I enter the question with text 'What is the significance of the crescent moon in Islam?'
        When I choose the tag with text 'Islam'
        When I click the button 'AI Assist'
        Then I will see a generated answer that contains the word 'crescent moon'
        When I click the 'Submit' button
        Then I will be on the question page

    @TRAINER
    Scenario: Trainer generates response from question about Buddhism
        Given I am at the Add Question pop up
        When I enter the question with text 'What is the four noble truths in buddhism?'
        When I choose the tag with text 'Buddhism'
        When I click the button 'AI Assist'
        Then I will see a generated answer that contains the word 'Truths'
        When I click the 'Submit' button
        Then I will be on the question page

