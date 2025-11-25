const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "c52jbq",
  e2e: {
    baseUrl: 'https://taptime-react-logeshwariarjavas-projects.vercel.app',
    setupNodeEvents(on, config) {
     
    },
  },
})