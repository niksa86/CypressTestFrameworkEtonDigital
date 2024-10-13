# CypressTestFrameworkEtonDigital
PROJECT TITLE
Cypress Test Automation Framework Eton Digital

Table of Content
1. Summary
2. Installation
3. Configuraion
4. Usage
5. Conclusion
6. Contact

1. Summary

This project represents assignement as a part of selection process for opening job position of Senior QA Developer/Team Lead.
Visual Studio Code is used as a environment for project development.
Java Script is useed as a scripting language for project setup and writing automationg tests.
Page Object design pattern is used for organising and developing project structure. 

2. Installation
Project ispublic and it is uploaded on remote repository on gitHub:
https://github.com/niksa86/CypressTestFrameworkEtonDigital.git

In order to install project locally please clone the project in specified local directory by typing command in git console or other git tool:
git -clone https://github.com/niksa86/CypressTestFrameworkEtonDigital.git

Open project in Visual Studio Code (Main menu- File - Open Folder) or other IDE that support Java Script language.

3. Configuration
To access the configuration of the project open 'cypress.config.js' file that is located in the root of the project.

    Configuration of the project is following:

    const { defineConfig } = require("cypress");

    module.exports = defineConfig({
        //Broswer configuration
        viewportHeight : 1080, 
        viewportWidth: 1920, 
        video:false, 
    e2e: {
        //Cypress test suite configuration
        excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'],
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        baseUrl: 'https://www.holycode.com',
        video: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});

4. Usage

Structure of the project:
 -  Tests suites are located under 'e2e\eton-digital-assignment'
    There are 3 Test Suites (Task1, Task2, Task3).
        Task1 suite contains test method for Assignment 1
        Task2 suite contains test method for Assignment 2
        Task3 suite contains test method for Assignment 3

 -  fixtures folder contains files that store test data and output test result data. 
    Folder contains following files:
        filePath.json file that contains test data used in Task 2 test suite
        listOpenPositionEtonDigital.txt file that contains output data from Task3 test suite

 -  support folder cointans page object classes, custom command files and global setup files
    support folder contains following structure:
        page_object folder, it contains page object classes:
            careerPage.js file -  represents elements and actions on Carrer page
            mainPage.js file -  represent elements and actions on Main page
        command.js file - contains custom command invoke later in the tests
        e2e.js file - cointans global setup that will be run before each test

 -  Also, I added .gitignore to clean project on remote repo from uneccessary data

 -  There are two options to run tests:
        First option is to run test in 'headless' mode. Open powershell Terminal in IDE and run 'npx cypress run' command to execute all tests. Test execution will be performed in browsers in headledd mode(browsers will not be vsisble during test execution)

        Second option is sto start Cypress UI for test execution and Cross Browser testing. 
        Open powershell Terminal in IDE and run command 'npx cypress open' command to open Cypress GUI
        Select E2E configuraion when Cypress GUI is opened
        Select available browser and click on Start e2E test
        From main menu (left corner) select Spec option
        On the right side list of available tests will be displayed. 
        Now, you can run all or seperate test on selected default browser or mutlipre browsers. 

5. Conclusion
I didn't have opportunity to work with Cypress and Java script until know. It was not  difficult to get the know the tool and envronment. It is very intuitive and easy for usage so I would recomend this tool for people who start learning test automation. During work following pros and cons are noticed from my side:
    Pros:
     - fast test execution
     - Automatic handeling of waits. For me this is the main advantage when  I compare cypress with different tools e.g like Selenium web Driver where waits need to be custom defined in order to avoid race conditions and test flakiness. 
     - Easy cross brower testing. There is no need to parametirezed test execution for each browser seperately like in other tools (e.g Selenium Web driver, Robot Framework), Cypress does that automatically.

     Cons:
     - During my work on this assignemnt I stump up on a known issue related to loading custom commands from command.js file. Cypress has a problem to load custom commands directly from this file, in some cases it does not recognized them. I try to implement work around by creating 'index.js' file. In this file in I specifed path from which custom command should be loaded and I put index.js file in project configuration as a support file for cypress execution. With this workaround custom commands still didn't load propely. At the end to avoid test flakiness I just put custom commands in appropriate page object class and call them in tests. More about this issue you can find on this link: https://github.com/cypress-io/cypress-documentation/issues/2565

     - Aslo, another issue is filtering of visible elements in the DOM after action on the page. Commands '.filter(':visible')' or '.filter.not(':hidden')' still will display element that are not visible on the page but there are present in the DOM.

     
     Overall Cypress is really suitable tool for rapid test automation framework development. 
     It is suitable for short timeline projects because:
     - Learning curve is fast, there is planty of documentation and community support
     - It is good for covereing smoke test suites and regression test suite
     - Oportunity costs for setup and writing test stays in the long run since value can be seen really fast in time cost reduction and making room for other types of testing to be included in testing process. 

6. Contact
   
   Author :  Dejan Nikolic
   Email:    dejan.nikolic2@gmail.com
   Github:   niksa86





