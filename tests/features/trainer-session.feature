Feature: Trainer Creating Sessions
    Narrative
        As a: trainer who is preparing for the upcoming training session
        I want: to be able to create my sessions
        so that: I can view them in the sessions page
    
    @TRAINER
    Scenario: Trainer sees a table of questions
        Given I am on the questions page
        Then I will see the FAQ page with all the created questions
    
    @sessions
    Scenario: Trainer sees a add session pop up
        Given I am on the questions page
        When I click on the checkbox to select the question with text 'What is the concept of sin in Christianity?'
        When I click on the checkbox to select the question with text 'What is the role of mindfulness in Buddhism?'
        When I click on the checkbox to select the question with text 'What is the concept of the Ummah in Islam?'
        Then I will see a create new session button
        When I click create new session button 
        Then I will see Add Session pop up

    @sessions
    Scenario: Trainer creates a new session
        Given I am on the Add Session pop up
        When I input 'Lesson1' as title into the form
        Then I click the submit button 

    @sessions
    Scenario: Trainer sees the newly created session
        Given I am on the questions page
        When I click into the sessions page
        Then I will see the session 'Lesson1' in the sessions table

    @sessions
    Scenario: Trainer fails to create a new session
        Given I am on the Add Session pop up
        When I click the submit button
        Then I should expect an alert with text 'Input title!'

    # Haven't add the ability to create sessions then add questions

    