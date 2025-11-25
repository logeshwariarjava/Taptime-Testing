const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "c52jbq",
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
     
    },
    
  },
})

