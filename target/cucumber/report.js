$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Functionality Feature",
  "description": "",
  "id": "login-functionality-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should be able to login with the valid credentials and create new account",
  "description": "",
  "id": "login-functionality-feature;user-should-be-able-to-login-with-the-valid-credentials-and-create-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Bank And Cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on New Account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User fills up the form entering \"\u003cAccountTitle\u003e\" and \"\u003cDescription\u003e\" and \"\u003cInitialBalance\u003e\" and \"\u003cAccountNumber\u003e\" and \"\u003cContactPerson\u003e\" and \"\u003cPhone\u003e\" and \"\u003cInternetBankingURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be able to see validate",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-functionality-feature;user-should-be-able-to-login-with-the-valid-credentials-and-create-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "AccountTitle",
        "Description",
        "InitialBalance",
        "AccountNumber",
        "ContactPerson",
        "Phone",
        "InternetBankingURL"
      ],
      "line": 19,
      "id": "login-functionality-feature;user-should-be-able-to-login-with-the-valid-credentials-and-create-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Uwase",
        "FamilyAccount",
        "200",
        "12345",
        "JU",
        "2343212342",
        "https://www.USbank.com"
      ],
      "line": 20,
      "id": "login-functionality-feature;user-should-be-able-to-login-with-the-valid-credentials-and-create-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5170382400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 1850947800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to login with the valid credentials and create new account",
  "description": "",
  "id": "login-functionality-feature;user-should-be-able-to-login-with-the-valid-credentials-and-create-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Bank And Cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on New Account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User fills up the form entering \"Uwase\" and \"FamilyAccount\" and \"200\" and \"12345\" and \"JU\" and \"2343212342\" and \"https://www.USbank.com\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be able to see validate",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDefinition.User_enters_and(String,String)"
});
formatter.result({
  "duration": 2379132200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_signin_button()"
});
formatter.result({
  "duration": 3709570900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 387689600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_Bank_And_Cash()"
});
formatter.result({
  "duration": 2108530600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_New_Account()"
});
formatter.result({
  "duration": 2726330701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uwase",
      "offset": 33
    },
    {
      "val": "FamilyAccount",
      "offset": 45
    },
    {
      "val": "200",
      "offset": 65
    },
    {
      "val": "12345",
      "offset": 75
    },
    {
      "val": "JU",
      "offset": 87
    },
    {
      "val": "2343212342",
      "offset": 96
    },
    {
      "val": "https://www.USbank.com",
      "offset": 113
    }
  ],
  "location": "StepDefinition.User_fills_up_the_form_entering_and_and_and_and_and_and(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3092500100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_Submit_Button()"
});
formatter.result({
  "duration": 1672120100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_should_be_able_to_see_validate()"
});
formatter.result({
  "duration": 819361100,
  "status": "passed"
});
formatter.after({
  "duration": 899849700,
  "status": "passed"
});
});