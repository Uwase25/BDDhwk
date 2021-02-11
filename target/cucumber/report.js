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
  "name": "Users enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Users click on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Users should land on Dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Bank And Cash",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should land on Accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003cAccountTitle\u003e\" and \"\u003cDescription\u003e\" and \"\u003cInitialBalance\u003e\" and \"\u003cAccountNumber\u003e\" and \"\u003cContactPerson\u003e\" and \"\u003cPhone\u003e\" and \"\u003cInternetBankingURL\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Submit Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
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
      "line": 20,
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
      "line": 21,
      "id": "login-functionality-feature;user-should-be-able-to-login-with-the-valid-credentials-and-create-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4818763499,
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
  "duration": 1200012800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
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
  "name": "Users enter \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Users click on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Users should land on Dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Bank And Cash",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should land on Accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters \"Uwase\" and \"FamilyAccount\" and \"200\" and \"12345\" and \"JU\" and \"2343212342\" and \"https://www.USbank.com\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Submit Button",
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
  "location": "StepDefinition.Users_enter_and(String,String)"
});
formatter.result({
  "duration": 2421306200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.Users_click_on_signin_button()"
});
formatter.result({
  "duration": 3755940900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.Users_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 471261799,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_Bank_And_Cash()"
});
formatter.result({
  "duration": 2106548200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_New_Account()"
});
formatter.result({
  "duration": 3034883601,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Accounts_page()"
});
formatter.result({
  "duration": 373475699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uwase",
      "offset": 13
    },
    {
      "val": "FamilyAccount",
      "offset": 25
    },
    {
      "val": "200",
      "offset": 45
    },
    {
      "val": "12345",
      "offset": 55
    },
    {
      "val": "JU",
      "offset": 67
    },
    {
      "val": "2343212342",
      "offset": 76
    },
    {
      "val": "https://www.USbank.com",
      "offset": 93
    }
  ],
  "location": "StepDefinition.user_enters_and_and_and_and_and_and(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2882940401,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_Submit_Button()"
});
formatter.result({
  "duration": 2123415701,
  "status": "passed"
});
});