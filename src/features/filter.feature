Feature: Apply filters



  Scenario Outline: I can apply single category filter
      Given I open the home page
      When I select filter by <category>
      Then I see that filter <category> is selected
      When I select filter by <category>
      Then I see that filter <category> is not selected

      Examples:
          | category    |
          | Cars        |
          | Electronics |
          | Free Stuff  |



  Scenario Outline: I can apply multiple categories filters
    Given I open the home page
    When I select filter by <category1>
    Then I see that filter <category1> is selected
    And I select filter by <category2>
    Then I see that filter <category2> is selected
    And I select filter by <category3>
    Then I see that filter <category3> is selected

    When I select filter by <category1>
    Then I see that filter <category1> is not selected
    When I select filter by <category2>
    Then I see that filter <category2> is not selected
    When I select filter by <category3>
    Then I see that filter <category3> is not selected

      Examples:
        | category1   | category2   | category3  |
        | Cars        | Electronics | Free Stuff |