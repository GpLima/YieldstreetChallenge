Feature: Product Browsing

Scenario Outline: Verify that products are displayed correctly and redirecting to the correct product page
    Given access the shopist site
    When I click on departments banner
    | departments |
    | <departments> |
    Then I should see the products for the right departments
    | departments |
    | <departments> |

    Examples:
        | departments |                             
        | chairs       |
        | sofas        |
        | bedding      |
        | lighting     |

Scenario: Verify that users can add items to the cart from the product page
    Given access the shopist site
    When I click on hero banner
    And I click on a product
    When I click on the add to cart button
    And I should see the right product in the cart
    When I click on the checkout button
    Then I should been on the success page
	
Scenario: Verify that users can edit own profile
    Given access the shopist site
    When I click on my profile button
    And I click on edit profile button
    When I click on the upload photo button
    Then I should be able to save the changes
	
Scenario: User try to open a sold out product page
    Given access the shopist site
    When I click on hero banner
    And I click on sold out product
    Then I should see the sold out warning message

Scenario: User try to open a sold out product page
    Given access the shopist site
    When I click on hero banner
    And I click on sold out product
    Then I should see the sold out warning message

Scenario: user try to sign up with invalid informations
    Given access the shopist site
    When I click on sign up button
    And I fill the form with invalid informations
    When I click on sign up button to complete the process
    Then I should see an error message