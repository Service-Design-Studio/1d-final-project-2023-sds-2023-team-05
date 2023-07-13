Feature: Trainer Add Questions page
    Narrative
        As a: trainer who is preparing for the upcoming training session
        I want: to be able to add questions and the corresponding answers that I think will be useful to the students
        so that: I can view them in the Questions page
    
    Scenario: When the trainer logs in and sees the table of questions posted by different trainers
        Given I am logged in
        And I am on the questions page
        Then I should see a table of questions posted by different trainers
        Then I should see a question with text "What is the role of meditation in Buddhism?"
        Then I should see a question with text "What is the concept of heaven in Christianity?"
        Then I should see a question with text "What is the significance of the Quran in Islam?"
        Then I should see a question with text "What is the role of compassion in Buddhism?"
        Then I should not see a question with text "Who is singapore's prime minister?"

    Scenario: When the trainer creates a valid question they should see the question at the bottom of the table
        Given I am logged in
        And I am on the questions page
        Then I should see a table of questions posted by different trainers
        Then I should not see a question with text "Who is singapore's prime minister?"
        Then I should see a "button" with id "add-question-button"
        When I click the "button" with id "add-question-button"
        Then I should see a "dialog" with id "new-question-dialog"
        When I select and input "Who is singapore's prime minister?" in the field with id "question-input"
        Then I select and input "Why is this here?" in the field with id "answer-input"
        Then I click the "button" with id "tag-selector"
        Then I click the "selector" with id "Christianity-selector"
        Then I click the "button" with id "submit-question"
        When I refresh the page
        Then I should see a question with text "Who is singapore's prime minister?"


    Scenario: When the trainer fails to enter the question, then they should see an alert
        Given I am logged in
        And I am on the questions page
        Then I should see a "button" with id "add-question-button"
        When I click the "button" with id "add-question-button"
        Then I should see a "dialog" with id "new-question-dialog"
        Then I click the "button" with id "submit-question"
        Then I should expect an alert with text "Fill question properly!"

    Scenario: When the trainer fails to enter the answer to a question, then they should see an alert
        Given I am logged in
        And I am on the questions page
        Then I should see a table of questions posted by different trainers
        Then I should see a "button" with id "add-question-button"
        When I click the "button" with id "add-question-button"
        Then I should see a "dialog" with id "new-question-dialog"
        When I select and input "Testing" in the field with id "question-input"
        Then I click the "button" with id "submit-question"
        Then I should expect an alert with text "Fill answer properly!"