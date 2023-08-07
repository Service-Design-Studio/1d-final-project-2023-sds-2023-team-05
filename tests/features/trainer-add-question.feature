Feature: Trainer Add Questions page
    Narrative
        As a: trainer who is preparing for the upcoming training session
        I want: to be able to add questions and the corresponding answers that I think will be useful to the students
        so that: I can view them in the Questions page

    @TRAINER
    Scenario: Trainer sees a table of questions
        Given I am on the questions page
        Then I will see the FAQ page with all the created questions

    @TRAINER
    Scenario: Trainer see the Add Question pop up
        Given I am on the questions page
        When I click the Add Question button
        Then I see the Add Question pop up

    # @TRAINER
    # Scenario: Trainer adds a question and answer
    #     Given I am at the Add Question pop up
    #     When I enter the question with text 'SX Testing Question'
    #     When I choose the tag with text 'Buddhism'
    #     When I enter the answer with text 'SX Testing Answer'
    #     When I click the 'Submit' button
    #     Then I will be on the question page

    @TRAINER
    Scenario: Trainer sees the newly created question and answer
        Given I am on the questions page
        When I will see the newly added question with text 'SX Testing Question'
        Then I will see the newly added answer with text 'SX Testing Answer'

    @TRAINER
    Scenario: Trainer deletes a question and answer
        Given I am on the questions page
        When I click on the kebab menu of the question with text 'SX Testing Question'
        When I click the 'Delete' option
        Then I will be on the question page

    @TRAINER
    Scenario: Trainer fails to enter question
        Given I am at the Add Question pop up
        When I click the 'Submit' button
        Then I will see an alert with text 'Fill question properly!'

    @TRAINER
    Scenario: Trainer fails to enter answer
        Given I am at the Add Question pop up
        When I enter the question with text 'SX Testing Question'
        When I click the 'Submit' button
        Then I will see an alert with text 'Fill answer properly!'