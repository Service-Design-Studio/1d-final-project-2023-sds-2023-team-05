Feature: View Flagged Chatbot Response 

    Narrative
        As a: trainer who is reviewing the chatbot prompts and answers
        I want: to be able to see the flagged answers by students
        so that: I can review the answers with interfaith subject matter experts to get an accurate answer for that prompt

    @TRAINER
    Scenario: Trainer heads to Chatbot page
        Given I am on the questions page
        When I click on the Chatbot button in the header
        Then I will be on the chatbot page
    
    @TRAINER
    Scenario: Trainer heads to the All tab to see all the questions
        Given I am on the trainer chatbot page
        When I click on the 'All' tab
        Then I will see all the questions that have been 'asked'

    @TRAINER
    Scenario: Trainer heads to the Flagged tab to see all the flagged questions
        Given I am on the trainer chatbot page
        When I click on the 'Flagged' tab
        Then I will see all the questions that have been 'flagged'

    @TRAINER
    Scenario: Trainer heads to the Edited tab to see all the edited questions
        Given I am on the trainer chatbot page
        When I click on the 'Edited' tab
        Then I will see all the questions that have been 'edited'