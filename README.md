# Note Taker application 
  ## Description
  A command line application that allows the user to search a company database for employees, roles and departments, add to those categories and update an employee's position.
  

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits) 
  
  ## Installation
  To download this application, copy the https code link, clone the code to your computer and open in a coding studio. Then use npm init -y to load the neccessary packages. Use npm i express mysql2 inquirer@8.2.4 to specifically download the required packages 

  ## Usage
![Walkthrough Video](https://github.com/sdanimc/sql-employee-tracker/blob/main/Untitled_%20Dec%2021%2C%202022%202_01%20PM.webm)
  To use the application, users should first update the password in connection.js to accurately reflect their mysql password. Use the set up code in schema.sql to create your database. If you do not have existing data you would like to load in, run the seed data found in seed.sql through mysql to add data. Once you have a database with data, you can use the applicaton by running node server.js in your terminal. An opening menu will present options from which the users can select. If the user chooses to View employees, departments or roles, a table with the associated data will generate in the terminal. Then the menu will repopulate so the user can continue. If the user chooses to add a department, role or employee, the terminal will prompt them with questions required for the new entry. When the user has completed all prompts, the console will log a success message and return the user to the main menu where they can choose to view the appeneded table to see the added information. Similarly, if the user selects to update an employee's role, they will be prompted to select the employee they wish to edit and their new role before logging a success message and returning the user to the menu. To exit the application at any time, press ctrl + c
  walkthrough vid


  ## Credits
  Coded by S. D. McMillan
