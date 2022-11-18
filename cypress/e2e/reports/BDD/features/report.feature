Feature: : Validate Test results table

    Validating test results for reportportal
    Scenario: Automation test suite Fixtures
    Given I open reportportal page
    When I navigate to Launches
    Then Results are appeared as expected
    When Select Suite with Retries
    Then Results are appeared as expected