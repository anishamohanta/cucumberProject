Feature: TestMeApp functionality
Scenario: register to TestMeapp
Given user should be on signup page
When user enters username "angelinadsouza"
And user enters firstname "angelina"
And user enters lastname "dsouza"
And user enters password "Angelina123"
And user re-enters password "Angelina123" 
And user enters gender as Female
And user enters emailid "angelina365@gmail.com"
And user enters mobilenumber "6370198575"
And user enters DOB "19/03/1997"
And user enters address "Bangalore"
And user selects security question
And user enters the answer "Black"
And user clicks register
Then user should be on login page