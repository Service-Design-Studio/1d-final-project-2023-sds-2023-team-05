Feature: Chatbot 

    Narrative
        As a: trainer who is reviewing the chatbot prompts and answers
        I want: to be able to see the flagged answers by students
        so that: I can review the answers with interfaith subject matter experts to get an accurate answer for that prompt

    @TESTING
    Scenario: Trainer heads to Chatbot page
        Given I am on the questions page
        When I click on the Chatbot button in the header
        Then I will be on the chatbot page
    
    @TESTING
    Scenario: Trainer heads to the All tab to see all the chatbot
        Given I am on chatbot page
        When I click the 'All' tab
        Then I will be on the 'All' tab page

    @TESTING
    Scenario: Trainer heads to Flagged tab from All tab
        Given I am on the 'All' tab
        When I click the 'Flagged' tab
        Then I will be on the 'Flagged' tab page

