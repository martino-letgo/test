Feature: Logging
	As a non logged in user
	I want to be able to login with my email,google or facebook account

	Background:
		Given I open the home page
		Then I clean the browser cookies


	Scenario: I cannot log in with an invalid email
		When I attempt to log in with invalid email
		Then I am presented with the error message
		And  I cannot see the avatar


	Scenario: I can login and logout with valid google account
		When I attempt to log in with valid google
		Then I can see the avatar
		When I logout
		Then I cannot see the avatar


	Scenario: I can login and logout with valid facebook account
		When I attempt to log in with valid facebook
		Then I can see the avatar
		When I logout
		Then I cannot see the avatar


	Scenario: I can login and logout with valid email
		When I attempt to log in with valid email
		Then I can see the avatar
		When I logout
		Then I cannot see the avatar


	    






