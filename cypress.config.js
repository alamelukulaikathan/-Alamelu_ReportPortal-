const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: 'cypress/e2e/reportPortal/*.js'
    //specPattern: 'cypress/integration/*.js',
    },
  },
});
