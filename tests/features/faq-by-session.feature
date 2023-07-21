Feature: FAQ by Session

    Narrative
        As a: student who is starting a training session
        I want: to be able to log in via the session code to see related FAQ questions for my current training session
        so that: I can view and interact with the customised FAQ so that I can get immediate answers to my questions if any.

    @FAQ
    Scenario: Learner sees a customised FAQ page for the training session with code 952555
        Given I am on the sign in page
        When I key in the class code 952555
        Then I will see the customised FAQ page with the following questions:
            | What is the significance of baptism? |
            | What is the concept of heaven in Christianity? |
            | What is the significance of the Quran in Islam? |
            | What is the role of prayer in Christianity? |

    @FAQ
    Scenario: Learner sees a different customised FAQ page for the training session with code 725018
        Given I am on the sign in page
        When I key in the class code 725018
        Then I will see the customised FAQ page with the following questions:
            | What are the Five Pillars of Islam? |
            | What is the significance of the Quran in Islam? |
            | What is the role of compassion in Buddhism? |
            | What is the purpose of the Hajj pilgrimage in Islam? |

    @FAQ
    Scenario: Learner clicks into a question of interest to see the answer
        Given I am on the customised FAQ page for session code 725018
        When I click the question with text "What are the Five Pillars of Islam?"
        Then I will see the corresponding answer with text "The Five Pillars of Islam are the core principles and practices that serve as the foundation of Muslim life and faith."

    @FAQ
    Scenario: Learner successfully searches for a question regarding pilgrimage in the search bar for session code 725018
        Given I am on the customised FAQ page for session code 725018
        When I type "pilgrimage" in the search bar
        Then I will see a question with text "What is the purpose of the Hajj pilgrimage in Islam?"
        When I click the question with text "What is the purpose of the Hajj pilgrimage in Islam?"
        Then I will see the corresponding answer with text "The Hajj pilgrimage is a significant Islamic practice that involves visiting the holy city of Mecca and performing specific rituals as a demonstration of faith and unity."

    @FAQ
    Scenario: Learner fails to search for a question regarding pilgrimage in the search bar for session code 952255
        Given I am on the customised FAQ page for session code 725018
        When I type "pilgrimage" in the search bar
        Then I will see nothing on the screen

    @FAQ
    Scenario: Learner goes back to landing page from the FAQ page 
        Given I am on the customised FAQ page for session code 725018
        When I click the back button
        Then I will see the landing page titled "Kampung Klass"