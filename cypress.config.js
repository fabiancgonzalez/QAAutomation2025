//const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";
/*
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
       //allureCypress(on, config, { resultsDir: "allure-results" });
     //         return config;
    },
  },
});
*/


       export default {
          reporter: 'mochawesome',
          reporterOptions: {
            reportDir: 'cypress/reports',
            overwrite: false,
            html: true,
            json: true,
            charts: true
          
          },
          e2e: {
            setupNodeEvents(on, config) {
              allureCypress(on, config, { resultsDir: "allure-results" });
              return config;
            },
          },
        };
