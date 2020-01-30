Feature:example mapping
Scenario: positive search login
Given user should login page
When user enters valid credentials And performs login
And clicks the search tab & enters the first four letters of the product
And selects product from drop down
And clicks find details
And adds the product to cart
Then user sould be in add to cart page