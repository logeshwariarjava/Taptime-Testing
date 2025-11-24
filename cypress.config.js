const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'taptime-testing',
  e2e: {
    baseUrl: 'https://taptime-testing.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})