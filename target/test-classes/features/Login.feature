@Login @Regression
Feature: Login Functionality Feature
 
Background: 
	Given User is on Techfios login page  

	
Scenario Outline: User should be able to login with the valid credentials and create new account
	When User enters "<username>" and "<password>" 
	And  User clicks on signin button
	Then User should land on Dashboard page
	When User clicks on Bank And Cash  
	When User clicks on New Account 
	When User fills up the form entering "<AccountTitle>" and "<Description>" and "<InitialBalance>" and "<AccountNumber>" and "<ContactPerson>" and "<Phone>" and "<InternetBankingURL>"
    And  User clicks on Submit Button   
	Then User should be able to see validate 
	 
 Examples:
	|username         | password |AccountTitle| Description| InitialBalance| AccountNumber| ContactPerson| Phone| InternetBankingURL|
	|demo@techfios.com| abc123   |Uwase    |FamilyAccount| 200|           12345|      JU|           2343212342|  https://www.USbank.com|
    
	 
	 
	
	
	
	
	
	
	