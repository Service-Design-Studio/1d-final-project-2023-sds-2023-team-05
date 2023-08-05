Feature: Trainer Edit Response

    Narrative
        As a: trainer who is reviewing the flagged responses
        I want: to be able correct the response and feedback to the chatbot model
        so that: the chatbot can generate a more accurate answer the next time the same question is asked.

    ### Requirements
    # Learner: Plant sensitive question beforehand about Islam: Are the followers of Islam extremists or terrorists?
    # Learner: Flag said response with 'Inaccurate Information' and press 'Flag Answer'

    @PM4
    Scenario: Trainer heads to Chatbot page
        Given I am on the questions page
        When I click on the Chatbot button in the header
        Then I will be on the chatbot page
    
    @PM4
    Scenario: Trainer reviews a sensitive question about Islam
        Given I am on chatbot page
        When I see a sensitive flagged Q&A about Islam
        When I press the 'Edit' button
        Then I see the 'Edit Chatbot Response' pop up
        When I key in the edited response in the 'Trained Response' text box
        Then I click 'Submit' button in the 'Edit Chatbot Response' pop up
        Then I will be on the chatbot page

    @PM4
    Scenario: Trainer reviews edited response for the sensitive question about Islam
        Given I am on chatbot page
        When I click the 'Edited Responses' tab
        Then I will be on the 'Edited Responses' tab page
        Then I will see my edited response for the sensitive question about Islam


