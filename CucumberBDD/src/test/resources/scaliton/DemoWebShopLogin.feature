Feature: Demo Web Shop Lofin feature file
@valid
Scenario Outline: Valid Login For Demo Web Shop for Admin user
Given The URL of the Demo Web Shop "http://demowebshop.tricentis.com/login"
When User enters "askmail@gmail.com" as username
And User enters "abc123" as password
And User clicks on Login button
Then User is in a valid page

Examples:
  |username        |password|
  |anisha@gmail.com|ani@123 |
  |abhi@ymail.com  |abh4455 |
  |suni@gmail.com  |son33   |
