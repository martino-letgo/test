Feature: Search

  Scenario Outline: I can search for items
    Given I open the home page
    And I search for <key>
    Then I can see <key> related results

    Examples:
      | key    |
      | iphone |
      | audi   |
      | asus   |
      | yamaha |
