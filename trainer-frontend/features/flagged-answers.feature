Feature: Flagged Answers

    Narrative:
        As a: trainer who is reviewing the list of questions
        I want: to be able to check what are the answers that have been flagged out by learners
        so that: I can check with the interfaith leaders on the best way to answer the question

    Scenario: Trainer navigates to the Flagged page
        Given I am logged in
        And I am on the questions page
        When I go to the Flagged page
        Then I will see a list of answers flagged by learners
        And I will see the list of reasons as to why they were flagged
        And I will see " "
        And I will see " "

    Scenario: Trainer edits the flagged question with an appriopriate answer
        Given I am at the Flagged page
        When I click on the edit button for " " answer
        And I change the answer to " "
        And I click save
        Then I will no longer see the answer in the list of flagged answers 



    