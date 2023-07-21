Feature: Trainer Creating Sessions
    Narrative
        As a: trainer who is preparing for the upcoming training session
        I want: to be able to create my sessions
        so that: I can view them in the sessions page
    
    Scenario: Trainer creates a new session
        Given I am on the questions page
        Then I should see a table of questions posted by different trainers
        When I select a question 0
        Then I select a question 1
        Then I select a question 2
        Then I see a create new session button
        When I click create new session button 
        Then I will see Add Session pop up
        When I input Lesson1 as title into the form and click the submit button
        When I head to the sessions page
        Then I will see the session Lesson1 in the sessions table
        
    Scenario: Trainer fails to enter session title 
        Given I am on the questions page
        Then I should see a table of questions posted by different trainers
        When I select a question 0
        Then I select a question 1
        Then I select a question 2
        Then I see a create new session button
        When I click create new session button 
        Then I will see Add Session pop up
        When I click the submit button
        Then I should expect an alert with text "Input title!"