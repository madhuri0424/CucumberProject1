$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureFiles/Supplier.feature");
formatter.feature({
  "name": "",
  "description": "As Admin User I want use ERP Module",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "I want to add Suppliers with Multiple Data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click AddIcon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "capture supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cSuppliername\u003e\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003caddress\u003e\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccity\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccountry\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccperson\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cpnumber\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmail\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmnumber\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cnotes\u003e\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "verify suppliernumber",
  "keyword": "When "
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Suppliername",
        "address",
        "city",
        "country",
        "cperson",
        "pnumber",
        "mail",
        "mnumber",
        "notes"
      ]
    },
    {
      "cells": [
        "Vamshi",
        "Ameerpet",
        "Hyderabad",
        "India",
        "Sravani",
        "9874678941",
        "Vamshi-@gmail.com",
        "8966743290",
        "I am a new Supplier"
      ]
    },
    {
      "cells": [
        "Vamshitha",
        "Begumpet",
        "Hyderabad",
        "India",
        "Sravanthi",
        "9874679941",
        "Vamshitha-@gmail.com",
        "8966743291",
        "I am a new Supplier"
      ]
    },
    {
      "cells": [
        "Himanshi",
        "Ameerpet",
        "Hyderabad",
        "India",
        "Sravya",
        "9874678942",
        "Himanshi-@gmail.com",
        "8966743292`",
        "I am a new Supplier"
      ]
    },
    {
      "cells": [
        "Pranay",
        "Sr Nagar",
        "Hyderabad",
        "India",
        "Madhuri",
        "9387923401",
        "Pranay-@gmail.com",
        "7893461244",
        "I am a new Supplier"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "I want to add Suppliers with Multiple Data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplierlink_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_supplierlink_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click AddIcon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_AddIcon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "capture supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Vamshi\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Sravani\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"9874678941\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Vamshi-@gmail.com\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8966743290\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"I am a new Supplier\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_confirm_OK_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_confirm_OK_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_OK_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_for_Alert_OK_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify suppliernumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_suppliernumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "I want to add Suppliers with Multiple Data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplierlink_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_supplierlink_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click AddIcon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_AddIcon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "capture supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Vamshitha\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Begumpet\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Sravanthi\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"9874679941\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Vamshitha-@gmail.com\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8966743291\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"I am a new Supplier\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_confirm_OK_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_confirm_OK_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_OK_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_for_Alert_OK_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify suppliernumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_suppliernumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "I want to add Suppliers with Multiple Data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplierlink_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_supplierlink_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click AddIcon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_AddIcon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "capture supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Himanshi\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Sravya\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"9874678942\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Himanshi-@gmail.com\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8966743292`\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"I am a new Supplier\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_confirm_OK_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_confirm_OK_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_OK_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_for_Alert_OK_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify suppliernumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_suppliernumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "I want to add Suppliers with Multiple Data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplierlink_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click supplierlink with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_supplierlink_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click AddIcon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_AddIcon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "capture supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Pranay\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Sr Nagar\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Madhuri\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"9387923401\" with \"xpath\" and \"//input[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Pranay-@gmail.com\" with \"xpath\" and \"//input[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7893461244\" with \"xpath\" and \"//input[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"I am a new Supplier\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_confirm_OK_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click confirm OK button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_confirm_OK_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_OK_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click for Alert OK button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_for_Alert_OK_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify suppliernumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_suppliernumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click logout with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_logout_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
});