Feature: Trainer Add Faqs
    Narrative
        As a: trainer who is preparing for the upcoming training session
        I want: to be able to add questions and the corresponding answers that I think will be useful to the students
        so that: I can view them in the Questions page
    
    Scenario: When the trainer logs in and sees the table of questions posted by different trainers
        Given I am logged in
        And I am on the questions page
        Then I should see a table of questions posted by different trainers
        And I should see a button to add a new question
        And I should see a button to edit a question
        And I should see a button to delete a question
    