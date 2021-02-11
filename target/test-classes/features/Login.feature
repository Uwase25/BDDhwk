@Login @Regression
Feature: Login Functionality Feature
 
Background: 
	Given User is on Techfios login page  

	
Scenario Outline: User should be able to login with the valid credentials and create new account
	When Users enter "<username>" and "<password>"
	When Users click on signin button
	And  Users should land on Dashboard page
	And  User clicks on Bank And Cash  
	And  User clicks on New Account 
	Then User should land on Accounts page  
	Then  User enters "<AccountTitle>" and "<Description>" and "<InitialBalance>" and "<AccountNumber>" and "<ContactPerson>" and "<Phone>" and "<InternetBankingURL>"
    Then User clicks on Submit Button   
	  
	
 Examples:
	|username         | password |AccountTitle| Description| InitialBalance| AccountNumber| ContactPerson| Phone| InternetBankingURL|
	|demo@techfios.com| abc123   |Uwase    |FamilyAccount| 200|           12345|      JU|           2343212342|  https://www.USbank.com|
    
	 
	 
	
	
	
	
	
	
	