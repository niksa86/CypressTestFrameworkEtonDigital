# CypressTestFrameworkEtonDigital
PROJECT TITLE
Cypress Test Automation Framework Eton Digital

Table of Content
1. Summary
2. Installation
3. Configuration
4. Usage
5. Conclusion
6. Contact

1. Summary

This project represents an assignment that was part of the selection process for the Senior QA Developer/Team Lead position that is opening.
Visual Studio Code is used as an environment for project development.
Java Script is used for project setup and writing automation tests.
The Page Object design pattern is used for the project organization and development. 

2. Installation
The project is public and it is uploaded to a remote repository on GitHub:
https://github.com/niksa86/CypressTestFrameworkEtonDigital.git

To install the project locally please clone the project in the specified local directory by typing the command in the git console or another git tool:
git -clone https://github.com/niksa86/CypressTestFrameworkEtonDigital.git

Open the project in Visual Studio Code (Main menu- File - Open Folder) or another IDE that supports JavaScript language.

3. Configuration
To access the configuration of the project open the 'cypress.config.js' file that is located at the root of the project.

    Configuration of the project is the following:

    const { defineConfig } = require("cypress");

    module.exports = defineConfig({
        //Browser configuration
        viewportHeight : 1080, 
        viewportWidth: 1920, 
        video: false, 
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
 -  Test suites are located under 'e2e\eton-digital-assignment'
    There are 3 Test Suites (Task1, Task2, Task3).
        Task1 suite contains the test method for Assignment 1
        Task2 suite contains the test method for Assignment 2
        Task3 suite contains the test method for Assignment 3

 -  The fixtures folder contains files that store test data and output test result data. 
    The folder contains the following files:
        filePath.json file that contains test data used in the Task 2 test suite
        listOpenPositionEtonDigital.txt file that contains output data from the Task3 test suite

 -  The support folder contains page object classes, custom command files, and global setup files
    support folder contains the following structure:
        page_object folder, which contains page object classes:
            careerPage.js file -  represents elements and actions on the Carrer page
            mainPage.js file -  represents elements and actions on Main page
        command.js file - contains custom command invoked later in the tests
        e2e.js file - contains global setup that will be run before each test

 -  Also, I added .gitignore to clean the project on the remote repo from unnecessary data

 -  There are two options to run tests:
        The first option is to run the test in 'headless' mode. Open the PowerShell Terminal in IDE and run 'npx cypress run' command to execute all tests. Test execution will be performed in browsers in headless mode(browsers will not be visible during test execution)

        The second option is to start Cypress UI for test execution and cross-browser testing. 
        Open PowerShell Terminal in IDE and run command 'npx cypress open' command to open Cypress GUI
        Select E2E configuration when Cypress GUI is opened
        Select the available browser and click on Start e2E test
        From the main menu (left corner) select the Spec option
        On the right side list of available tests will be displayed. 
        Now, you can run all or separate tests on selected default browsers or multiple browsers. 

5. Conclusion
I didn't have the opportunity to work with Cypress and JavaScript language until now. It was not  difficult to get the know the tool and environment. It is very intuitive and easy to use so I would recommend this tool for people who start learning test automation. During work following pros and cons are noticed from my side:
    Pros:
     - fast test execution
     - Automatic handling of waits. For me, this is the main advantage when  I compare Cypress with different tools e.g Selenium web Driver where waits need to be custom-defined to avoid race conditions and test flakiness. 
     - Easy cross-browser testing. There is no need to parameterize test execution for each browser separately like in other tools (e.g. Selenium Web driver, Robot Framework), Cypress does that automatically.

     Cons:
     - During my work on this assignment I found a known issue related to loading custom commands from the command.js file. Cypress has a problem loading custom commands directly from this file, in some cases, it does not recognize them. I try to implement a workaround by creating an 'index.js' file. In this file, I specified the path from which the custom command should be loaded and I put the index.js file in the project configuration as a support file for cypress execution. With this workaround custom commands still didn't load properly. In the end, to avoid test flakiness I just put custom commands in the appropriate page object class and call them in tests. More about this issue you can find on this link: https://github.com/cypress-io/cypress-documentation/issues/2565

     - Also, another issue is the filtering of visible elements in the DOM after action on the page. Commands '.filter(':visible')' or '.filter.not(':hidden')' still will display elements that are not visible on the page but are present in the DOM.

     
     Overall Cypress is a suitable tool for rapid test automation framework development. 
     It is suitable for short-timeline projects because:
     The learning curve is fast, there is plenty of documentation and community support
     - It is good for covering smoke test suites and regression test suite
     - Opportunity costs for setup and writing tests stay low in the long run since value can be seen fast in time cost reduction and making room for other types of testing to be included in the testing process. 

6. Contact
   
   Author :  Dejan Nikolic
   Email:    dejan.nikolic2@gmail.com
   Github:   niksa86





