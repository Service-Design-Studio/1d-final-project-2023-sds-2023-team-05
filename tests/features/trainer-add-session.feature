# Feature: Trainer Creating Sessions
#     Narrative
#         As a: trainer who is preparing for the upcoming training session
#         I want: to be able to create my sessions
#         so that: I can view them in the sessions page
    
#     @TRAINER
#     Scenario: Trainer sees a table of questions
#         Given I am on the questions page
#         Then I will see the customised FAQ page with the following first five questions:
#             | What is the concept of sin in Christianity? |
#             | What is the role of mindfulness in Buddhism? |
#             | What is the concept of the Ummah in Islam? |
#             | What is the role of the Bible in Christianity? |
#             | What is the concept of Nirvana in Buddhism? |
    
#     @TRAINER
#     Scenario: Trainer sees a add session pop up
#         Given I am on the questions page
#         When I click on the checkbox to select the question with text 'What is the concept of sin in Christianity?'
#         When I click on the checkbox to select the question with text 'What is the role of mindfulness in Buddhism?'
#         When I click on the checkbox to select the question with text 'What is the concept of the Ummah in Islam?'
#         Then I will see a create new session button
#         When I click create new session button 
#         Then I will see Add Session pop up

    @TRAINER
    Scenario: Trainer creates a new session from Add Session pop up
        Given I am on the Add Session pop up
        When I input 'Lesson 1' as title into the form
        Then I click the submit button 

    @TRAINER
    Scenario: Trainer sees the newly created session from Add Session pop up
        Given I am on the questions page
        When I click into the sessions page
        Then I will see the session 'Lesson 1' in the sessions table

    @TESTING
    Scenario: Trainer fails to create a new session
        Given I am on the Add Session pop up
        When I click the submit button
        Then I should expect an alert with text 'Input title!'

    @TRAINER
    Scenario: Trainer creates a new session from Sessions page
        Given I am on the 'Sessions' page
        When I click 'Create New Session' button
        When I input 'Lesson 2' as title into the form
        Then I click the submit button 
        When I click the 'Add Question' button
        When I enter the question with text 'SX Lesson 2 Testing Question'
        When I choose the tag with text 'Buddhism'
        When I enter the answer with text 'SX Lesson 2 Testing Answer'
        When I click the 'Submit' button
        Then I am on 'Lesson 2' session page

    @TRAINER
    Scenario: Trainer sees the newly created session from Sessions page
        Given I am on the 'Sessions' page
        Then I will see the session 'Lesson 2' in the sessions table

    