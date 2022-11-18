const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: "cypress/e2e/apitest/*.js"
    //specPattern: "cypress/e2e/reports/*.js"
    specPattern: "cypress/e2e/*/*.js"
  },
});
