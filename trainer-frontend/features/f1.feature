Feature: Frontend Cucumber

  # Scenario: Opening the recent transactions page
  #   Given I started the application

  Scenario: Log in to the main page
      Given started the application
      When I click the button with text "Sign in with Google"
      Then I will be on the Google sign in page
      Then I input Gmail account "audiobobbin@gmail.com"
