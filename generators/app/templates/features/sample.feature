Feature: <%= gemClassName %> provided sample
  Scenario: File passed as argument
    Given a file named "file.txt" with:
    """
    This is an input line
    And another input line
    """
    When I run `bin/<%= gemName %> file.txt`
    Then output should contain exactly:
    """
    0.1.0
    """
  Scenario: File passed via STDIN
    Given a file named "file.txt" with:
    """
    This is an input line
    And another input line
    """
    When I run `bin/<%= gemName %>` interactively
    And I pipe in the file "file.txt"
    Then output should contain exactly:
    """
    0.1.0
    """
