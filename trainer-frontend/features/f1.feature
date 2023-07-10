Feature: Frontend Cucumber

    Scenario: Opening the recent transactions page
        Given I am at the homepage
        When I click on "Recent Transactions"
        Then I will be redirected to the Recent Transactions page

    Scenario: Filter button 0 filters correctly to "234-43941-0"
        Given I am at the Recent Trasanctions page and I want to filter by "234-43941-0"
        When I click on the filter button by account number "234-43941-0"
        Then I will see that the transactions are filtered by account "234-43941-0"
        And the transaction details tally with account "234-43941-0"