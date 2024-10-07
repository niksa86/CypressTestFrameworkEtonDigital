const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight : 1080,
  viewportWidth: 1920,
  video:false,
  e2e: {
    excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://www.holycode.com',
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
