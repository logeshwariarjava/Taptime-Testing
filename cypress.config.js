const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "c52jbq",
  e2e: {
    baseUrl: "https://logeshwariajava.github.io/Taptime-Testing/",
    setupNodeEvents(on, config) {
     
    },
  },
})