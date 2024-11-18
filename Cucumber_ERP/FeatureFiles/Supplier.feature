@tag
Feature:
As Admin User I want use ERP Module
@Supplier
Scenario Outline:
I want to add Suppliers with Multiple Data
Given Launch browser as
When launch url 
When wait for username with "name" and "username" and "10"
When Enter username with "name" and "username" and "admin"
When Enter password with "xpath" and "//input[@id='password']" and "master"
When Click login button with "xpath" and "//button[@id='btnsubmit']" 
When wait for supplierlink with "xpath" and "(//a[contains(text(),'Suppliers')])[2]" and "10"
When click supplierlink with "xpath" and "(//a[contains(text(),'Suppliers')])[2]"
When wait for AddIcon with "xpath" and "(//span[@data-caption='Add'])[1]" and "10"
When click AddIcon button with "xpath" and "(//span[@data-caption='Add'])[1]"
When wait for supplier number with "name" and "x_Supplier_Number" and "10"
When capture supplier number with "name" and "x_Supplier_Number"
When Enter in "<Suppliername>" with "name" and "x_Supplier_Name"
When Enter in "<address>" with "xpath" and "//textarea[@id='x_Address']"
When Enter in "<city>" with "xpath" and "//input[@id='x_City']"
When Enter in "<country>" with "xpath" and "//input[@id='x_Country']"
When Enter in "<cperson>" with "xpath" and "//input[@id='x_Contact_Person']"
When Enter in "<pnumber>" with "xpath" and "//input[@id='x_Phone_Number']"
When Enter in "<mail>" with "xpath" and "//input[@id='x__Email']"
When Enter in "<mnumber>" with "xpath" and "//input[@id='x_Mobile_Number']"
When Enter in "<notes>" with "xpath" and "//textarea[@id='x_Notes']"
When click Add button with "id" and "btnAction"
When wait for confirm OK button with "xpath" and "//button[normalize-space()='OK!']" and "10"
When click confirm OK button with "xpath" and "//button[normalize-space()='OK!']"
When wait for Alert OK button with "xpath" and "(//button[starts-with(text(),'OK')])[6]" and "10"
When click for Alert OK button with "xpath" and "(//button[starts-with(text(),'OK')])[6]"
When verify suppliernumber
When click logout with "xpath" and "(//a[starts-with(text(),' Logout')])[2]"
When close browser
Examples:
|Suppliername|address|city|country|cperson|pnumber|mail|mnumber|notes|
|Vamshi|Ameerpet|Hyderabad|India|Sravani|9874678941|Vamshi-@gmail.com|8966743290|I am a new Supplier|
|Pranay|Sr Nagar|Hyderabad|India|Madhuri|9387923401|Pranay-@gmail.com|7893461244|I am a new Supplier|


@Customer
Scenario Outline:
I want to validate Customer Module with Multiple data
Given Launch browser as
When launch url 
When wait for username with "name" and "username" and "10"
When Enter username with "name" and "username" and "admin"
When Enter password with "xpath" and "//input[@id='password']" and "master"
When Click login button with "xpath" and "//button[@id='btnsubmit']" 
When wait for customerlink with "xpath" and "(//a[starts-with(text(),'Customers')])[2]" and "10"
When click customerlink with "xpath" and "(//a[starts-with(text(),'Customers')])[2]"
When wait for AddIcon with "xpath" and "(//span[@data-caption='Add'])[1]" and "10"
When click AddIcon button with "xpath" and "(//span[@data-caption='Add'])[1]"
When wait for customer number with "name" and "x_Customer_Number" and "10"
When capture customer number with "name" and "x_Customer_Number"
When Enter in "<Customername>" with "name" and "x_Customer_Name"
When Enter in "<address>" with "xpath" and "//textarea[@id='x_Address']"
When Enter in "<city>" with "xpath" and "//input[@id='x_City']"
When Enter in "<country>" with "xpath" and "//input[@id='x_Country']"
When Enter in "<cperson>" with "xpath" and "//input[@id='x_Contact_Person']"
When Enter in "<pnumber>" with "xpath" and "//input[@id='x_Phone_Number']"
When Enter in "<mail>" with "xpath" and "//input[@id='x__Email']"
When Enter in "<mnumber>" with "xpath" and "//input[@id='x_Mobile_Number']"
When Enter in "<notes>" with "xpath" and "//input[@id='x_Notes']"
When click Add button with "id" and "btnAction"
When wait for confirm OK button with "xpath" and "//button[normalize-space()='OK!']" and "10"
When click confirm OK button with "xpath" and "//button[normalize-space()='OK!']"
When wait for Alert OK button with "xpath" and "(//button[starts-with(text(),'OK')])[6]" and "10"
When click for Alert OK button with "xpath" and "(//button[starts-with(text(),'OK')])[6]"
When verify customernumber
When click logout with "xpath" and "(//a[starts-with(text(),' Logout')])[2]"
When close browser
Examples:
|Customername|address|city|country|cperson|pnumber|mail|mnumber|notes|
|Madhuri|Sr nagar|Hyderabad|India|Pranay|9391158845|madhu@gmail.com|8907765990|I am a new customer|
|Madhu|Begumpet|Hyderabad|India|Lucky|9392253445|madhu1@gmail.com|8907765790|I am a new customer|
